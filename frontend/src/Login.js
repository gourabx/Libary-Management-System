import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'User@xyz.com' && password === '1234') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{ margin: '100px auto', width: '300px', textAlign: 'center' }}>
       <h1>Welcome to Library Management System
</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;



}

export default Login;


