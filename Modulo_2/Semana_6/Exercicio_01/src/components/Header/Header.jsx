import styles from './Header.module.css';
import logoImg from './../../assets/img/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logoImg} alt="Cupcake Shop" width="120" />

        <ul>
          <li>
            <a href="/produtos">
              <span>🔸</span>Produtos
            </a>
          </li>
          <li>
            <a href="/contato">
              <span>🔸</span>Contato
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
