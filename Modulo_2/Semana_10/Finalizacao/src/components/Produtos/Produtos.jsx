import { Container } from 'react-bootstrap';
import { CardProduto } from '../CardProduto';
import { useGlobalContext } from './../../context';

const Produtos = ({ num }) => {
  const { cupcakes } = useGlobalContext();
  return (
    <Container className="mb-5">
      <div className="my-5">
        <h2 className="produto-title">Nossos Cupcakes</h2>
        <p className="produto-subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis soluta
          numquam cum animi quos itaque quisquam nulla nemo quidem voluptatem?
        </p>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {cupcakes.map((cupcake) => {
          if (cupcake.id <= num)
            return <CardProduto key={cupcake.id} cupcake={cupcake} />;
        })}
      </div>
    </Container>
  );
};

export default Produtos;
