import styles from "./Login.module.css";

// Routes
import { Link } from "react-router-dom";

// Images
import mockup from "../../../Images/mockup-cellphone.svg";
import logo from "../../../Images/brotasGram-logo.svg";

const Login = () => {
  return (
    <div className='container flex-center'>

      <div className={styles.login_container}>
        <div className={styles.login_content}>
          <img src={mockup} alt="cellphone" />

          <div className={styles.login_form_container}>

            <div className={styles.login_form}>
              <img src={logo} alt="BrotasGram name" />
              <form>
                <input type="text" name="email" id="email" placeholder="Username or email" />
                <input type="text" name="email" id="email" placeholder="Password" />
                <input type="submit" value="Logar" />
              </form>
            </div>

            <div className={styles.login_account}>
              <p>Não tem uma Conta? <Link to="/register">Criar Conta</Link></p>
            </div>

          </div>

        </div>
      </div>

      <footer>
        <div className={styles.footer_content}>
          <p>© 2022 BrotasGram from <a href="https://github.com/Jeff-Christian" target="_blank" rel="noreferrer">Jéff Christian</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Login