import { Container, Grid, Box, Typography } from '@mui/material';
import { client, urlFor } from '../../lib/client';
import Background from "./background"

const Contact = ({contacts, backgrounds}) => {
  return (
    <div style={{position: "relative", display: "flex", justifyContent: "center", marginBottom:"2%"}}>
      <Background backgrounds={backgrounds} style={{zIndex: -1}}/>
      <div id="responsive-container-contact" style={{ width: "75%", position: 'relative' }}>
        <Grid container justifyContent='center'>
          
        </Grid>
        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px', marginTop: '20px', marginLeft: '-10px', marginRight: '-10px' }}>
          {contacts?.map((item, index)=> (
            <Grid container spacing={2} key={index}>
              <Grid item xs={12} md={6}>
                <Box id="contact_top_left" style={{background: 'rgba(0, 0, 0, 0.1)', widht:"69%", height:"50vh"}}>
                  <img src={urlFor(item.image[0]).url()} style={{ width:"100%", padding:"2%"}} />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
              <Box id="contact_top_right" style={{
                textAlign: "center",
                background: 'rgba(0, 0, 0, 0.1)',
                padding:"5%",
                position: 'relative', /* Set position property to relative on parent element */
                width:"69vh",
                height:"50vh"
              }}>
                <div style={{ 
                  position: 'absolute', /* Set position property to absolute on child element */
                  top: '50%', /* Set top property to 50% */
                  left: '50%', /* Set left property to 50% */
                  transform: 'translate(-50%, -50%)', /* Use translate to center the element */

                }}>
                  <Typography variant="h4">Contact Information</Typography>
                  <Typography variant="h6">{item.email}</Typography>
                  <Typography variant="h6">{item.telefon}</Typography>
                  <Typography variant="h6">{item.adresse}</Typography>
                </div>
              </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box style={{ textAlign:"center", background: 'rgba(0, 0, 0, 0.1)',widht:"69vh", height:"50vh", padding:"10px"}}>
                  <Typography variant="h4" style={{marginBottom:"2%"}}>General Information</Typography>
                  <Typography variant="body1">{item.information}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box style={{ background: 'rgba(0, 0, 0, 0.1)', textAlign:"center", widht:"69vh"}}>
                  <img src={urlFor(item.image[1]).url()} style={{ height: 'auto', width: '100%', maxWidth: '500px'}} />
                </Box>
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          #contact_top_box {
            flex-direction: column;
          }
          #contact_bot_box {
            flex-direction: column;
          }
          #contact_top_box img {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
          }
          #contact_bot_box img {
            width: 100%;
            height: auto;
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async () => {
  const ContactQuery = `*[_type == "contact"] { image, email, telefon, adresse, information, slug,  }`;
  const contacts = await client.fetch(ContactQuery);

  const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
  const backgrounds = await client.fetch(backgroundsQuery)

  return {
    props: { contacts, backgrounds }
  }
}

export default Contact;








/*
    <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
      <Background backgrounds={backgrounds} style={{zIndex: -1}}/>
      <div id="responsive-container-contact" style={{ width: "60%", position: 'relative' }}>
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
    </div>*/