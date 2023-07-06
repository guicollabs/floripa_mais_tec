import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './CardProduto.module.css';
import { ModalCard } from './../ModalCard';

const CardProduto = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <article className={styles.article}>
      <img className={styles.image} src="https://placehold.co/300x150" alt="" />

      <div className={styles.content}>
        <a href="#">
          <span className={styles.title}>Lorem ipsum dolor</span>
        </a>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
        </p>
        <a href="#" className={styles.action}>
          Adicionar
          <span>→</span>
        </a>
        <ModalCard />

        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch modal with grid
        </Button>

        <ModalCard show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </article>
  );
};

export default CardProduto;
