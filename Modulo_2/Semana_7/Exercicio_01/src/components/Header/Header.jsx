import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [name, setName] = useState('');

  const handleClick = () => {
    const inputName = prompt('Qual seu nome?');
    setName(inputName);
  };

  return (
    <div className={styles.header}>
      <h2>Logomarca</h2>
      <div>
        <p>{`Olá ${name ? name : 'visitante'}`}</p>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Header;
