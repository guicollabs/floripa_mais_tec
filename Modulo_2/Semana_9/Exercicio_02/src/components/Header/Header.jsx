import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoImg from '../../assets/img/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logoImg} alt="Cupcake Shop" width="120" />

        <ul>
          <li>
            <Link to="/">
              <span>🔸</span>Home
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              <span>🔸</span>Produtos
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <span>🔸</span>FAQ
            </Link>
          </li>
          <li>
            <Link to="/contato">
              <span>🔸</span>Contato
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
