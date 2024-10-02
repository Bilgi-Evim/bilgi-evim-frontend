// /src/components/auth/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "../../Services/authService";
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // useHistory yerine useNavigate kullanıyoruz

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(credentials);
    setUser(user);
    if (user.role === 'admin') {
      navigate('/admin/dashboard');
    } else if (user.role === 'teacher') {
      navigate('/teacher/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
