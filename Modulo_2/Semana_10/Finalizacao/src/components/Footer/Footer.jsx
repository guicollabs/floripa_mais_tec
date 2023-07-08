import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

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
            <a href="#" target="_blank">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footer_bottom}>
        <Container className="footer_bottom">
          <p>
            <Link href="/">Cupcakes Shop</Link> &copy; 2023
          </p>
          <div className={styles.footer_menu}>
            <ul>
              <li>
                <Link to="/">
                  <span>🔸</span>Home
                </Link>
              </li>
              <li>
                <Link to="/produtos">
                  <span>🔸</span>Produtos
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <span>🔸</span>FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato">
                  <span>🔸</span>Contato
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
