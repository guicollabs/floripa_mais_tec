import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import { GiCupcake } from 'react-icons/gi';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h2>404</h2>
      <h3>Página não encontrada.</h3>
      <p>OPS! Parece que você está saindo da nossa cupcakeria! :(</p>
      <p className="text-center">
        <Link to="/" className="btn btn-primary btn-default">
          <GiCupcake /> Voltar para Home
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
