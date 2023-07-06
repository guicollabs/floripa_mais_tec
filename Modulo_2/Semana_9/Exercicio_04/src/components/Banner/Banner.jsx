import styles from './Banner.module.css';
import { GiCupcake } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <h2>Diversos Sabores de Cupcakes</h2>
        <button type="button">
          <GiCupcake />
          <span>Escolha o seu</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
