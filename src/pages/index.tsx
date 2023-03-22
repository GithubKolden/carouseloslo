import Image from 'next/image'
import LOGO from './img/LOGO.png';
import { Grid, Box, useTheme } from '@mui/material';

const Home = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundImage: 'url("./img/BG.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${theme.spacing(0)} ${theme.spacing(10)}`, // responsive padding
            textAlign: 'center', // center align text on small screens
            [theme.breakpoints.down('sm')]: { // apply styles for small screens
              padding: `${theme.spacing(0)} ${theme.spacing(5)}`,
              
            },
          }}
        >
          <Image
            src={LOGO}
            alt="Logo"
            width={700}
            height={200}
            layout="responsive" // make image responsive
            objectFit="contain"
            objectPosition="center"
          />
        </Box>
      </Grid>   
   
    </Grid> 
  )
};

export default Home;

