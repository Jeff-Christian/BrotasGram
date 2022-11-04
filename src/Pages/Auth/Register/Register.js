import styles from "./Register.module.css";

// Routes
import { Link } from "react-router-dom";

// Images
import logo from "../../../Images/brotasGram-logo.svg";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (

    <div className='container flex-center'>

      <div className={styles.register_container}>

        <img src={logo} alt="BrotasGram name" />
        <p>
          Cadastre-se para ver as fotos de seus amigos.
        </p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="email" id="email" placeholder="Email" />
          <input type="text" name="userName" id="userName" placeholder="Nome de usuário" />
          <input type="password" name="password" id="password" placeholder="Senha" />
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua senha" />
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