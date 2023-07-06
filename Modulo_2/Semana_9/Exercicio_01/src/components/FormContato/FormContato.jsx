import { useState } from 'react';
import styles from './FormContato.module.css';

const FormContato = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className={styles.box}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Deixe o seu recado</h2>
        <div className={styles.half}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Digite seu telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          disabled={
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.message
          }
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default FormContato;
