import fantasy from "../data/fantasy.json";
import { Component } from "react";
import { Button, Card, Col, Collapse, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    console.log("FANTASY", fantasy);
    return (
      <Container fluid>
        <Row className="justify-content-center">
          {fantasy.map((book) => (
            <Col key={book.asin} className="text-center" xs={2} sm={3} md={4} lg={6} xxl={8}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary">€ {book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
