import Image from 'next/image'
import logo from './img/LOGO.png';
import { Grid, Box } from '@mui/material';

const Home = () => {
  return (  
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <Box sx={{ width: '25%' }}>
          <Image src={logo} alt="" className="img-fluid" />
        </Box>
      </Grid>   
   
    </Grid> 
  )
};
export default Home;