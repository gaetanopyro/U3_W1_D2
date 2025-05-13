import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Mynav() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <Navbar expand="lg" className="bg-primary">
            <Container>
              <Navbar.Brand className="text-white fs-1" href="#home">
                ҉
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="text-white" href="#">
                    Home
                  </Nav.Link>
                  <Nav.Link className="text-white" href="#">
                    About
                  </Nav.Link>
                  <Nav.Link className="text-white" href="#">
                    Browse
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Mynav;
