import React, { useState } from "react";
import TeacherLayout from "../../Layouts/TeacherLayout";
import "../../Assets/Css/Teacher/teacherMessages.css";

const TeacherMessages = () => {
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
      { id: 1, text: "Merhaba Müdür", sender: "teacher" },
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
      const newMessage = { id: messages[selectedUser.id].length + 1, text: input, sender: "teacher" };
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
    <TeacherLayout>
      <div className="message-container">
        <div className="user-list">
          <h3>Kullanıcılar</h3>
          <ul className="menu">
            <li>
              <button onClick={() => toggleSubmenu("director")} className="menu-button">
                Müdürler
              </button>
              {openSubmenu === "director" && (
                <ul className="submenu">
                  {directors.map((user) => (
                    <li
                      key={user.id}
                      className={selectedUser?.id === user.id ? "active" : ""}
                      onClick={() => setSelectedUser(user)}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleSubmenu("teacher")} className="menu-button">
                Öğretmenler
              </button>
              {openSubmenu === "teacher" && (
                <ul className="submenu">
                  {teachers.map((user) => (
                    <li
                      key={user.id}
                      className={selectedUser?.id === user.id ? "active" : ""}
                      onClick={() => setSelectedUser(user)}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleSubmenu("student")} className="menu-button">
                Öğrenciler
              </button>
              {openSubmenu === "student" && (
                <ul className="submenu">
                  {students.map((user) => (
                    <li
                      key={user.id}
                      className={selectedUser?.id === user.id ? "active" : ""}
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

        <div className="chat-container">
          {selectedUser ? (
            <>
              <h2 className="mb-4">{selectedUser.name} ile Sohbet</h2>
              <div className="chat-box">
                {messages[selectedUser.id].map((message) => (
                  <div key={message.id} className={`message ${message.sender}`}>
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="input-group">
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
    </TeacherLayout>
  );
};

export default TeacherMessages;
