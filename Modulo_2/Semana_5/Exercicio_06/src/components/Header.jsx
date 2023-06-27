import styles from './Header.module.css';

const Header = ({ name }) => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <a href="#">Gmail</a>
        </li>
        <li>
          <a href="#">Imagens</a>
        </li>
        <button type="button">Fazer Login</button>
      </ul>
    </header>
  );
};

export default Header;
