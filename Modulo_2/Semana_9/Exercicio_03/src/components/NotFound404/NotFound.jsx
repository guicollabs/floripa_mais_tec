import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h2>404</h2>
      <h3>Página não encontrada.</h3>
      <p>OPS! Parece que você está saindo da nossa cupcakeria! :(</p>
      <Link to="/">Voltar para Home</Link>
    </section>
  );
};

export default NotFound;
