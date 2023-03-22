import { Container, Grid, Box, Typography } from '@mui/material'
import Blomst from "./img/BLOMST.jpg"

const Contact = () => {
  return (
    <Container>
  <Grid container justifyContent='center'>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <h1>Contact</h1>
    </Box>
  </Grid>
  <Grid container justifyContent='center' spacing={2}>
    <Grid item xs={12} sm={6}>
      <Box sx={{ display: 'flex', justifyContent: 'center', borderStyle: "solid", position: 'relative'}}>
        <img src='https://www.1800flowers.com/blog/wp-content/uploads/2017/03/single-red-rose.jpg' alt='' style={{ maxWidth: '100%'}} />
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box sx={{ justifyContent: 'center', borderStyle: "solid" }}>
        <Typography variant='h4' gutterBottom textAlign={'center'}>
          Contact information
        </Typography>
        <Typography variant = 'body1' textAlign={'center'} style={{textDecoration: 'underline', marginTop: '2rem'}}>
          E-post: carousel.oslo@hotmail.com
        </Typography>
        <Typography variant = 'body1' textAlign={'center'} style={{textDecoration: 'underline', marginTop: '1rem'}}>
         Tlf: 12345678
        </Typography>
        <Typography variant = 'body1' textAlign= {'center'} style={{textDecoration: 'underline', marginTop: '1rem'}}>
         Adresse: 1621 Gressvik, Hurrødåsen 10
        </Typography>
      </Box>
    </Grid>
  </Grid>
  <Grid container justifyContent='center' spacing={2}>
    <Grid item xs={12} sm={6}>
      <Box sx={{ justifyContent: 'center', borderStyle: "solid" }}>
        <Typography variant='h4' gutterBottom textAlign={'center'}>
          Contact information
        </Typography>
        <Typography variant = 'body1' textAlign={'center'}>
          yo
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box sx={{ display: 'flex', justifyContent: 'center', borderStyle: "solid" }}>
        <img src='https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg' alt='' style={{ maxWidth: '100%'}} />
      </Box>
    </Grid>
  </Grid>
</Container>

  );
}
export default Contact;