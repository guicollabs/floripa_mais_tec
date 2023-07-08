import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import image from './../../assets/img/image.svg';

function CardProduto({ cupcake }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cupcake.image} />
        <Card.Body>
          <Card.Title>{cupcake.title}</Card.Title>
          <Card.Text>{cupcake.description}</Card.Text>
          <Button className="btn-default" onClick={() => setModalShow(true)}>
            Carrinho
          </Button>
        </Card.Body>
      </Card>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {cupcake.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <img src={cupcake.image} alt={cupcake.title} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                {cupcake.description}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <h2>R$ {Number(cupcake.price).toFixed(2)}</h2>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardProduto;
