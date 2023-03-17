import { useEffect } from 'react';
import logo from './img/LOGO.png';
import Image from 'next/image';
import Cart  from './cart';
import { useStateContext } from '../../context/StateContext';
import { AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';

//MATERIAL UI:
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Tooltip, MenuItem, Button, Container, Menu, Typography, IconButton, Toolbar, Box } from '@mui/material/'; 

const pages = ['Home', 'Shop', 'Projects', 'Contact', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigationbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null); };

  const { showCart, setShowCart, totalQuantities } = useStateContext();
/*
  useEffect(() => {
    if (window.location.pathname.split("",2).pop() === "/")  {
      (document.getElementById("logo") as HTMLElement).style.display = "none";
    } else  {
      (document.getElementById("logo") as HTMLElement).style.display = "";
    }
  })
  */
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          {/*<Image id="logo" src={logo} className="classes.logo" alt="logo" style={{width: "170px", left: "15px", height: "auto", float: "left", position: "absolute"}}/>
          */}
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > {/* Rendrer sidene i mobilversjon: */}
              
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/">
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/shop">
                  <Typography textAlign="center">Shop</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/project">
                  <Typography textAlign="center">Projects</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/contact">
                  <Typography textAlign="center">Contact</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/about">
                  <Typography textAlign="center">About</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/order">
                  <Typography textAlign="center">Custom Order</Typography>
                </Link>
              </MenuItem>
              
            </Menu>
          </Box>
          {/* LOGO MOBILE: */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
  <Link href="/" passHref>
    <Button sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
      HOME
    </Button>
  </Link>

  <Link href="/shop" passHref>
    <Button sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
      SHOP
    </Button>
  </Link>

  <Link href="/project" passHref>
    <Button sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
      PROJECTS
    </Button>
  </Link>

  <Link href="/contact" passHref>
    <Button sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
      CONTACT
    </Button>
  </Link>

  <Link href="/about" passHref>
    <Button sx={{ color: 'inherit', textDecoration: 'none' }}>
      ABOUT
    </Button>
  </Link>

  <Link href="/order" passHref>
    <Button sx={{ color: 'inherit', textDecoration: 'none' }}>
      CUSTOM ORDER
    </Button>
  </Link>
</Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Show items">
              <IconButton sx={{ p: 0 }}>
                <Link href="/cart">
                  <AiOutlineShopping />
                  <span className='cart-item-qty'>{totalQuantities}</span>
                </Link>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
/*
<button type="button" className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
          </button>
*/
//{showCart && <Cart />}
export default Navigationbar;