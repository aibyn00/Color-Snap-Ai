
import axios from "axios";
import { useState } from "react";
import './Register.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [userData, setUserData] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState('');

  function validateForm() {
    const nameRegex = /^[A-Za-zА-Яа-я\s]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!nameRegex.test(name)) {
      setError("Name тек әріптерден тұруы керек.");
      return false;
    }

    if (!passwordRegex.test(password)) {
      setError("Пароль кемінде 8 таңба, 1 үлкен әріп, 1 сан, 1 арнайы символ болуы керек.");
      return false;
    }

    if (password !== confirmpassword) {
      setError("Қайталанған пароль дұрыс емес.");
      return false;
    }

    setError('');
    return true;
  }

  function handleRegister() {
    if (!validateForm()) return;

    axios.post('https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders', {
      name,
      email,
      username,
      phone: number,
      password,
    })
    .then(res => {
      setUserData(res.data);
      setSuccess(true);
    })
    
  }

  return (
        <div className="body">
    <div className="container">
      <h1>Register New User</h1>

      <label>Name</label> <br />
      <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} /><br />
      <label>Email</label><br />
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} /> <br />
      <label>Username</label><br />
      <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} /><br />
      <label>Phone</label><br />
      <input type="tel" placeholder="Enter your phone number" onChange={(e) => setNumber(e.target.value)} /><br />
      <label>Password</label><br />
      <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} /><br />
      <label>Confirm Password</label><br />
      <input type="password" placeholder="Confirm your password" onChange={(e) => setConfirmpassword(e.target.value)} /><br />
      {success && <p className="ppp" style={{ color: 'green' }}>Successfully registered!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleRegister}>Register</button>

      {success && userData && (
        <div className="rrr" style={{padding: "15px", marginTop: "20px", borderRadius: "8px" }}>
          <h3>Registered User Details</h3>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      )}
    </div></div>
  );
}

export default App;
