import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark fixed-top px-4" style={{ backgroundColor: '#48483A' }}>
        <Container>
          <Navbar.Brand href="/" style={{color: "#F2F3E2"}}>Sujot Singh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"} style={{color: "#F2F3E2"}}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"} style={{color: "#F2F3E2"}}>About</Nav.Link>
              <Nav.Link as={Link} to={"/projects"} style={{color: "#F2F3E2"}}>Projects</Nav.Link>
              <Nav.Link as={Link} to={"/blog"} style={{color: "#F2F3E2"}}>Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header