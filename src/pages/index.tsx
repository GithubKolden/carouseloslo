import Image from 'next/image'
import LOGO from './img/LOGO.png';
import { Grid, Box } from '@mui/material';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundImage: 'url("https://www.pngmagic.com/product_images/eCommerce-website-banner-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 10%', // responsive padding
            textAlign: 'center', // center align text on small screens
            '@media screen and (max-width: 600px)': { // apply styles for small screens
              padding: '0 5%',
              height: 'auto',
            },
          }}
        >
          <Image
            src={LOGO}
            alt="Logo"
            width={700}
            height={200}
            style={{ maxWidth: '100%', height: 'auto' }} // make image responsive
          />
        </Box>
      </Grid>   
   
    </Grid> 
  )
}

export default Home;
