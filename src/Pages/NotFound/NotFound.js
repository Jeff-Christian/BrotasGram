import styles from "./NotFound.module.css";

// Routes
import { Link } from "react-router-dom";

// Images
import logo from "../../Images/brotasGram-logo.svg";

const NotFound = () => {
  return (
    <div className="container">
        <nav>
            <ul className={styles.navbarList}>
                <li>
                    <img src={logo} alt="logo marca da rede social" />
                </li>

                <li>
                    <Link to="/">Log In</Link>
                </li>

            </ul>
        </nav>
        <main>
            <div className={styles.page_notfound}>
                <h2>Desculpe, essa page não está funcionando</h2>
                <p>Esse link que você tentou seguir está quebrado, ou a página foi removida. Volte para o <Link to="/">BrotasGram</Link></p>
            </div>
        </main>
    </div>
  )
}

export default NotFound