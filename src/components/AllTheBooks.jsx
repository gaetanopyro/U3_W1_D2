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
            {fantasy.map((book) => (
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary">{book.price}</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
