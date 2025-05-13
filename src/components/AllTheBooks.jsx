import fantasy from "../data/fantasy.json";
import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    console.log("FANTASY", fantasy);
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10} className="text-center">
            <Card>
              {fantasy.map}
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg" />
              <Card.Body>
                <Card.Title>The Last Wish: Introducing the Witcher</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
