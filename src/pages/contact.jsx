import { Container, Grid, Box, Typography } from '@mui/material';
import { client } from '../../lib/client';
import Background from "./background"

const Contact = ({backgrounds}) => {
  return (
    <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
      <Background backgrounds={backgrounds} style={{zIndex: -1}}/>
      <div id="responsive-container-contact" style={{ width: "80%", position: 'relative' }}>
        <Grid container justifyContent='center'>
          <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: "2%"}}>
              <h1>Contact</h1>
            </Box>
          </Grid>

          <Grid container justifyContent='center' spacing={2} style={{ position: 'relative' }}>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', borderStyle: "none", position: 'relative' }}>
                <img src='https://www.1800flowers.com/blog/wp-content/uploads/2017/03/single-red-rose.jpg' alt='' style={{ maxWidth: '100%'}} />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box id="contact-box-1" sx={{ justifyContent: 'center', borderStyle: "none" }}>
                <Typography variant='h4' gutterBottom textAlign={'center'}>
                  Contact information
                </Typography>
                <Typography variant = 'body1' textAlign={'center'} style={{textDecoration: 'underline', marginTop: '1rem'}}>
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

          <Grid container justifyContent='center' spacing={2} style={{ border: 'none', color: 'red', position: 'relative'}}>

            <Grid item xs={12} sm={6}>
              <Box id="contact-box-2" sx={{ justifyContent: 'center', borderStyle: "none" }}>
                <Typography variant='h4' gutterBottom textAlign={'center'}>
                  General information
                </Typography>
                <Typography variant = 'body1' textAlign={'center'}>
                  Rumpa til fredrik er fersk/tørka
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', borderStyle: "none" }}>
                <img src='https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg' alt='' style={{ maxWidth: '100%'}} />
              </Box>  
            </Grid>

          </Grid>
        </div>
    </div>
  );
}

export const getServerSideProps = async () => {

  const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
  const backgrounds = await client.fetch(backgroundsQuery)

  return {
    props: { backgrounds }
  }
};
export default Contact;