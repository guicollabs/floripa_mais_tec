const Lista = ({ name }) => {
  return (
    <>
      <h2>Lista do {name}</h2>
      <ul>
        <li>
          <a href="#">Pão</a>
        </li>
        <li>
          <a href="#">Leite</a>
        </li>
        <li>
          <a href="#">Manteiga</a>
        </li>
        <li>
          <a href="#">Café</a>
        </li>
      </ul>
    </>
  );
};

export default Lista;
