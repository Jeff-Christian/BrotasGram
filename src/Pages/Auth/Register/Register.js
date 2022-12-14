import styles from "./Register.module.css";

// Routes
import { Link } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";

// Redux
import { register, reset } from "../../../Slices/AuthSlice";

// Images
import logo from "../../../Images/brotasGram-logo.svg";

// Components
import Message from '../../../Components/Message/Message';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name, 
      email,
      password, 
      confirmPassword
    }

    console.log(user);

    dispatch(register(user));

  };

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

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

          {!loading && <input type="submit" value="Cadastrar" />}
          {loading && <input type="submit" value="Aguarde" disabled />}
          {error && <Message msg={error} type="error" />}

        </form>

        <p> Já tem uma conta? <Link to="/">Logar</Link></p>

      </div>

    </div>
  )
}

export default Register