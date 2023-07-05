import styles from './Footer.module.css';
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <h3>Cupcakes Shop</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          autem incidunt animi placeat expedita? Rerum eius ipsa quia iusto at
          nam eveniet corporis atque a molestias praesentium, ullam repudiandae
          sit!
        </p>
        <ul>
          <li>
            <a href="#">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footer_bottom}>
        <p>
          <a href="#">Cupcakes Shop</a> &copy; 2023
        </p>
        <div className={styles.footer_menu}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Produtos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
