import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useEffect } from 'react';
import logo from './img/LOGO.png';
import Image from 'next/image';
import Cart  from './Cart';
import { useStateContext } from '../../context/StateContext';
import { AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';

const Navigationbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  //Makes navbar logo not visible on homepage
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
      <Link  href='/'>
        <Navbar.Brand style={{ width:"10%", position: "absolute" }}>
         
            <Image className='img' src={logo} alt="" style={{ width: "100%", height: "auto" }}/>
            
        </Navbar.Brand>
        </Link>
      </Container>

      <Container style={{ width: "auto" }}>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href='/'> Home </Link>

            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <Link href='/shop'> All Products </Link>
              <NavDropdown.Divider />
              <Link href='/shop'> Dried Flowers </Link> 
              <Link href='/shop'> Fresh Flowers </Link>
            </NavDropdown>

            <Link href='/project'>Projects</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
          </Nav>
          <button type="button" className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
          </button>
        </Navbar.Collapse>
          
      </Container>
      {showCart && <Cart />}
    </Navbar>
    
  )
}
export default Navigationbar;