import styles from './CardContato.module.css';

const CardContato = () => {
  return (
    <section className={styles.mapa}>
      <h2>Venha conhecer nossa loja</h2>
      <div className={styles.address}>
        <div>
          <p>Rua Afonso Pena, 1500</p>
          <p>Belo Horizonte, Minas Gerais</p>
        </div>
        <div>
          <p>contato@cupcakesshop.com.br</p>
          <p>(11) 3020-5020</p>
        </div>
      </div>
      <p>Aberto das 08:00 às 18:00 de segunda a sexta</p>
    </section>
  );
};

export default CardContato;
