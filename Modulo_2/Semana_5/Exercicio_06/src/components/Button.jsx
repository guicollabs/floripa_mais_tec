import styles from './Button.module.css';

const Button = ({ type, title }) => {
  return (
    <button className={styles.button} type={type}>
      {title}
    </button>
  );
};

export default Button;
