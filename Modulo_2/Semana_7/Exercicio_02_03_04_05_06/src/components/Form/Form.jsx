import { useState } from 'react';
import styles from './Form.module.css';
import { Users } from './../Users';

const Form = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    nickname: '',
    age: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.nickname || (!user.age && !user.email && !user.password)) {
      return setError(true);
    }

    setError(false);

    setUsers([
      ...users,
      {
        id: new Date().getTime().toString(),
        nickname: user.nickname,
        age: user.age,
        email: user.email,
        password: user.password,
      },
    ]);

    setUser({ nickname: '', age: '', email: '', password: '' });
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p>Preencha todos os campos.</p>}
        <input
          type="text"
          name="nickname"
          placeholder="Digite o nome de usuário"
          value={user.nickname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Digite sua idade"
          value={user.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Digite seu e-mail"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Digite sua senha"
          value={user.password}
          onChange={handleChange}
        />
        <button>Cadastrar</button>
      </form>
      <Users users={users} />
    </>
  );
};

export default Form;
