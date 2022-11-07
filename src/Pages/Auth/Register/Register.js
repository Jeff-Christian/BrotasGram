import styles from "./Register.module.css";

// Routes
import { Link } from "react-router-dom";

// Images
import logo from "../../../Images/brotasGram-logo.svg";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name, 
      email,
      password, 
      confirmPassword
    }

    console.log(user);

  };

  return (

    <div className='container flex-center'>

      <div className={styles.register_container}>

        <img src={logo} alt="BrotasGram name" />
        <p>
          Cadastre-se para ver as fotos de seus amigos.
        </p>

        <form onSubmit={handleSubmit}>

          <input 
          type="text" 
          name="email" 
          id="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email" />

          <input 
          type="text" 
          name="userName" 
          id="userName" 
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Nome de usuário" />

          <input 
          type="password" 
          name="password" 
          id="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Senha" />

          <input 
          type="password" 
          name="confirmPassword" 
          id="confirmPassword" 
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Confirme sua senha" />

          <p>
            Ao se cadastrar você concorda com os nossos Termos, Privacidade, Politícas de uso e Cookies.
          </p>

          <input type="submit" value="Cadastrar" />

        </form>

        <p> Já tem uma conta? <Link to="/">Logar</Link></p>

      </div>

    </div>
  )
}

export default Register