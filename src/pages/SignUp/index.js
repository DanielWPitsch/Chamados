import './signup.css';
import logo from '../../assets/logo.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
    const[nome, setNome] = useState('');
    const[email, setEmail] =useState('');
    const[senha, setSenha] = useState('');

    const{signUp, loadingAuth} = useContext(AuthContext);

    async function handleSubmit(e){
        e.preventDefault();

        if(nome !== '' && email !== '' && senha !== ''){
            signUp(nome, email, senha);
        }
    }

    return (
      <div className='container-center'>
        <div className='login'>
            <div className='login-area'>
                <img src={logo} alt="Logo do sistema"/>
            </div>

            <form onSubmit={handleSubmit}>
                <h1>Cadastrar</h1>
                <input
                    type="text"
                    placeholder='seu nome'
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                />

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

                <button type="submit" > 
                {loadingAuth ? 'Carregando...' : 'Cadastrar'} </button>
            </form>
            <Link to="/"> Já possui uma conta? Faça login </Link>
        </div>
      </div>
    );
  }