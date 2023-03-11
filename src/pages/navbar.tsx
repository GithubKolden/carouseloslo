import { useEffect } from 'react';
import logo from './img/LOGO.png';
import Image from 'next/image';
import Cart  from './Cart';
import { useStateContext } from '../../context/StateContext';
import { AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';

//MATERIAL UI:
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Shop', 'Projects', 'Contact', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigationbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null); };

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  useEffect(() => {
    if (window.location.pathname.split("",2).pop() === "/")  {
      (document.getElementById("logo") as HTMLElement).style.display = "none";
    } else  {
      (document.getElementById("logo") as HTMLElement).style.display = "";
    }
  })
  
  return (
    <AppBar position="static">
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
          <Image id="logo" src={logo} className="classes.logo" alt="logo" style={{width: "170px", left: "15px", height: "auto", float: "left", position: "absolute"}}/>
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
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Show items">
              <IconButton onClick={setShowCart} sx={{ p: 0 }}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
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
      {showCart && <Cart />}
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