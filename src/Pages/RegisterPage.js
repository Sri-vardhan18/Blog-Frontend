import { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Register = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }), // Fix: Wrap username and password in an object
      headers: { 'Content-Type': 'application/json' }, // Fix: Correct typo from 'header' to 'headers'
    });
  };

  return (
    <form className="register" onSubmit={Register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
}  

