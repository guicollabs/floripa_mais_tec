import styles from './FormContato.module.css';

const FormContato = () => {
  return (
    <section className={styles.box}>
      <form className={styles.form}>
        <h2>Deixe o seu recado</h2>
        <div className={styles.half}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="Digite seu nome" />
          </div>
          <div>
            <label htmlFor="phone">Telefone:</label>
            <input type="text" id="phone" placeholder="Digite seu telefone" />
          </div>
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" placeholder="Digite sua mensagem"></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default FormContato;
