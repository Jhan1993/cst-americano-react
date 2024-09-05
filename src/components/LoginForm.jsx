import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === 'admin' && password === '12345') {
        navigate('/home'); // Redireccionamos a la página de Home
      } else {
        alert('oh ooh! Nombre de usuario o contraseña incorrecto(s), corrigelos para continuar');
      }
    };
  
    return (
        <div className='login-form'>
            <div className='name-logo'>
                <img src="/picture-login.svg" alt="CST Americano Logo" width={200} height={200}/>
                <h2>Ingresar a CST Americano</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </div>
            <div className='inputs'>
                <label htmlFor="password">Contraseña:</label>
                <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div className='inputs box-password'>
                <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPassword">Mostrar contraseña</label>
            </div>
            <button type="submit">Ingresar</button>
            </form>
        </div>
    );
  };
  
  export default LoginForm;