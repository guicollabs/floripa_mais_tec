import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Descreva brevemente sua dúvida..." />
      <button>
        <BsSearch color="#fff" />
      </button>
    </div>
  );
};

export default Search;
