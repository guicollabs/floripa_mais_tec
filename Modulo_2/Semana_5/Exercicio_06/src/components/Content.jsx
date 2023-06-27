import googleImg from './../assets/img/logo-google.png';
import Button from './Button';
import Form from './Form';
import styles from './Context.module.css';

const Content = () => {
  return (
    <main className={styles.main}>
      <img src={googleImg} alt="Google" />
      <Form />
      <div>
        <Button type="button" title="Pesquisa Google" />
        <Button type="button" title="Estou com sorte" />
      </div>
    </main>
  );
};

export default Content;
