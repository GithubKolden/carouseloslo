import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useEffect } from 'react';
import logo from './img/LOGO.png';
import Image from 'next/image';

const Navigationbar = () => {

  // Makes navbar logo not visible on homepage
  useEffect(() => {
    if (window.location.pathname.split("",2).pop() === "/")  {
      (document.getElementById("logo") as HTMLElement).style.display = "none";
    } else  {
      (document.getElementById("logo") as HTMLElement).style.display = "";
    }
  })

  return (
    <Navbar style={{ width:"100%" }} className="d-flex justify-content-center" bg="transparent" expand="lg" variant="dark">

      <Container id="logo" style={{ width:"100%", position: "absolute" }}>
        <Navbar.Brand href='/' style={{ width:"10%", position: "absolute" }}>
            <Image className='img' src={logo} alt="" style={{ width: "100%", height: "auto" }}/>
        </Navbar.Brand>
      </Container>

      <Container style={{ width: "auto" }}>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>

            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href='/shop'> All Products </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/shop'> Dried Flowers </NavDropdown.Item>
              <NavDropdown.Item href='/shop'> Fresh Flowers </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='/project'>Projects</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
export default Navigationbar;