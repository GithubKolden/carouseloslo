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

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Box sx={{ maxWidth: '100%', height: 'auto', mx: "auto" }}>
          <Image src={logo} alt="" className="img-fluid" layout="responsive" />
        </Box>
      </Grid>   
   
    </Grid> 
  )
};
export default Home;
