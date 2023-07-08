import { Container, Row, Col } from 'react-bootstrap';
import { IoMdPin, IoIosChatbubbles, IoIosClock } from 'react-icons/io';

function CardContato() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center image"
    >
      <div className="container bg-light p-5 rounded contato">
        <h2 className="text-center mb-5">Venha conhecer nossa loja</h2>

        <Row>
          <Col className="text-center">
            <p>
              <IoMdPin color="#864212" />
              Endereço
            </p>
            Rua Afonso Pena, 1500
            <br />
            Belo Horizonte, Minas Gerais
          </Col>

          <Col className="text-center">
            <p>
              <IoIosChatbubbles color="#864212" />
              Contato
            </p>
            contato@cupcakesshop.com.br
            <br />
            (11) 3020-5020
          </Col>

          <Col className="text-center">
            <p>
              <IoIosClock color="#864212" />
              Horário de Atendimento
            </p>
            Aberto das 08:00 às 18:00 <br />
            Segunda a Sexta
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default CardContato;
