import './signin.css';
import logo from '../../assets/logo.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contexts/auth';

export default function SignIn() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const {signIn, loadingAuth} = useContext(AuthContext);

    async function handleSignIn(e){
        e.preventDefault();
        
        if(email !== '' && senha !== ''){
            await signIn(email, senha);
        }
    }

    return (
      <div className='container-center'>
        <div className='login'>
            <div className='login-area'>
                <img src={logo} alt="Logo do sistema"/>
            </div>

            <form onSubmit={handleSignIn}>
                <h1>Entrar</h1>
                <input
                    type="text"
                    placeholder='email@email.com'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='********'
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)}
                />

                <button type="submit" > {loadingAuth ? "Carregando..." : "Acessar"}</button>
            </form>
            <Link to="/register"> Criar sua conta </Link>
        </div>
      </div>
    );
  }