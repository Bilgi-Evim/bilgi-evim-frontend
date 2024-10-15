import React, { useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "../../Assets/Css/Admin/messages.css";

const AdminMessages = () => {
  const users = [
    { id: 1, name: "Ahmet Yılmaz", role: "director" },
    { id: 2, name: "Mehmet Kaya", role: "teacher" },
    { id: 3, name: "Ayşe Demir", role: "teacher" },
    { id: 4, name: "Ali Can", role: "student" },
    { id: 5, name: "Fatma Yıldız", role: "student" },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [messages, setMessages] = useState({
    1: [
      { id: 1, text: "Merhaba Müdür", sender: "admin" },
      { id: 2, text: "Merhaba, nasılsınız?", sender: "director" },
    ],
    2: [],
    3: [],
    4: [],
    5: [],
  });
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { id: messages[selectedUser.id].length + 1, text: input, sender: "admin" };
      setMessages({
        ...messages,
        [selectedUser.id]: [...messages[selectedUser.id], newMessage],
      });
      setInput("");
    }
  };

  const toggleSubmenu = (role) => {
    setOpenSubmenu(openSubmenu === role ? null : role);
  };

  const directors = users.filter((user) => user.role === "director");
  const teachers = users.filter((user) => user.role === "teacher");
  const students = users.filter((user) => user.role === "student");

  return (
    <AdminLayout>
      <div className="admin-message-container">
        <div className="admin-user-list">
          <h3>Kullanıcılar</h3>
          <ul className="admin-menu">
            <li>
              <button onClick={() => toggleSubmenu("director")} className="admin-menu-button">
                Müdürler
              </button>
              {openSubmenu === "director" && (
                <ul className="admin-submenu">
                  {directors.map((user) => (
                    <li
                      key={user.id}
                      className={selectedUser?.id === user.id ? "admin-active" : ""}
                      onClick={() => setSelectedUser(user)}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleSubmenu("teacher")} className="admin-menu-button">
                Öğretmenler
              </button>
              {openSubmenu === "teacher" && (
                <ul className="admin-submenu">
                  {teachers.map((user) => (
                    <li
                      key={user.id}
                      className={selectedUser?.id === user.id ? "admin-active" : ""}
                      onClick={() => setSelectedUser(user)}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleSubmenu("student")} className="admin-menu-button">
                Öğrenciler
              </button>
              {openSubmenu === "student" && (
                <ul className="admin-submenu">
                  {students.map((user) => (
                    <li
                      key={user.id}
                      className={selectedUser?.id === user.id ? "admin-active" : ""}
                      onClick={() => setSelectedUser(user)}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="admin-chat-container">
          {selectedUser ? (
            <>
              <h2 className="mb-4">{selectedUser.name} ile Sohbet</h2>
              <div className="admin-chat-box">
                {messages[selectedUser.id].map((message) => (
                  <div key={message.id} className={`admin-message ${message.sender}`}>
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="admin-input-group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="form-control"
                  placeholder={`${selectedUser.name} ile mesajlaşın...`}
                />
                <button type="submit" className="btn btn-primary">Gönder</button>
              </form>
            </>
          ) : (
            <h2 className="text-center mb-4">Bir kullanıcı seçin</h2>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminMessages;
