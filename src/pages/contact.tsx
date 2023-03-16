import { Container, Grid, Box, Typography } from '@mui/material'
import Blomst from "./img/BLOMST.jpg"

const Contact = () => {
  return (
    <Container>
  <Grid container justifyContent='center'>
    <Box sx={{ display: 'flex', justifyContent: 'center', borderStyle: "solid" }}>
      <h1>Contact</h1>
    </Box>
  </Grid>
  <Grid container justifyContent='center' spacing={2}>
    <Grid item xs={12} sm={6}>
      <Box sx={{ display: 'flex', justifyContent: 'center', borderStyle: "dotted", position: 'relative'}}>
        <img src='https://images.squarespace-cdn.com/content/v1/5b4606ec96d4557cbd0f1e5d/1613862613056-VMVHMPY7YDAJ8GPXNAR6/Carousel_Maren-Mjelstad.jpg?format=1500w' alt='' style={{ maxWidth: '100%'}} />
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box sx={{ justifyContent: 'center', borderStyle: "dotted" }}>
        <Typography variant='h4' gutterBottom textAlign={'center'}>
          Contact information
        </Typography>
        <Typography variant = 'body1' textAlign={'center'}>
          yo
        </Typography>
      </Box>
    </Grid>
  </Grid>
  <Grid container justifyContent='center' spacing={2}>
    <Grid item xs={12} sm={6}>
      <Box sx={{ justifyContent: 'center', borderStyle: "dotted" }}>
        <Typography variant='h4' gutterBottom textAlign={'center'}>
          Contact information
        </Typography>
        <Typography variant = 'body1' textAlign={'center'}>
          yo
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box sx={{ display: 'flex', justifyContent: 'center', borderStyle: "dotted" }}>
        <img src='https://images.squarespace-cdn.com/content/v1/5b4606ec96d4557cbd0f1e5d/1613862613056-VMVHMPY7YDAJ8GPXNAR6/Carousel_Maren-Mjelstad.jpg?format=1500w' alt='' style={{ maxWidth: '100%'}} />
      </Box>
    </Grid>
  </Grid>
</Container>

  );
}
export default Contact;