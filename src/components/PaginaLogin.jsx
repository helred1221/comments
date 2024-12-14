import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../index.css'

export default function PaginaLogin() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState([]);

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
  }, [login]);

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    setLogin(
      {
        username,
        password
      }
    );
  }

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Nome de Usuário"
        value={username}
        className='username'
        onChange={handleUsernameInput}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        className='password'
        onChange={handlePasswordInput}
        required
      />
      {username == null || password == null ? <button className='login_button' type="submit" disabled onClick={handleLogin}>Login</button> : <Link to="/home"><button className='login_button' type="submit" onClick={handleLogin}>Login</button></Link>}

    </div>
  );
}