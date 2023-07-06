import { useState } from 'react';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default AccordionItem;
