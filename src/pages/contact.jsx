import { Grid, Box, Typography, Container } from '@mui/material';
import { client, urlFor } from '../../lib/client';
import Background from "../components/background"

const Contact = ({contacts, backgrounds}) => {
  return (
    <>
    <Background backgrounds={backgrounds} style={{ zIndex: -1}} />
      
      <Container id="container-about-contact" sx={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(5px)', zIndex: -1 }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(5px)', borderRadius: '20px', zIndex: 0 }}>
          {contacts?.map((item, index) => (
            <Grid container justifyContent='center' alignItems='center' key={item.slug.current}>
              <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Box
                  component="img"
                  src={urlFor(item.image[0])}
                  alt="Contact image"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                <Box id="contact-box-1" sx={{ justifyContent: 'center', borderStyle: "none" }}>
                  <Typography variant='h6' gutterBottom  style={{ textAlign:"center"}}>
                    <h1 style={{textAlign:"Center", marginBottom:"2%"}}>Contact</h1>
                    <p>{item.email}</p>
                    <p>{item.telefon}</p>
                    <p>{item.adresse}</p>
                    <br></br>
                    <p>{item.information}</p>

                    {item.contact}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </>
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


