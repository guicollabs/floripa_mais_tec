import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiCupcake } from 'react-icons/gi';

function Banner() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center image"
    >
      <div className="p-5">
        <h1 className="display-4 fw-bold text-center mb-4 title">
          Diversos Sabores de Cupcakes
        </h1>
        <p className="text-center">
          <Link to="/produtos" className="btn btn-primary btn-default">
            <GiCupcake /> Escolha o seu
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default Banner;
