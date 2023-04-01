import { Container, Grid, Box, Typography } from '@mui/material';
import { client, urlFor } from '../../lib/client';
import Background from "./background"

const About = ({ abouts, backgrounds }) => {
  return (
    <>
      <Background backgrounds={backgrounds} style={{ zIndex: -1}} />
      <Box sx={{ position: 'absolute', top: '70px', bottom: "70px", left: 0, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 1 }}>
        <Typography variant='h3' gutterBottom>About</Typography>
      </Box>
      <Container sx={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(5px)', zIndex: -1 }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(5px)', borderRadius: '20px', zIndex: 0 }}>
          {abouts?.map((item, index) => (
            <Grid container justifyContent='center' alignItems='center' key={item.slug.current}>
              <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Box
                  component="img"
                  src={urlFor(item.image[0])}
                  alt="about images"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                <Box id="contact-box-1" sx={{ justifyContent: 'center', borderStyle: "none" }}>
                  <Typography variant='h4' gutterBottom textAlign={'center'}>
                    {item.contact}
                  </Typography>
                  <Typography variant='body1' textAlign={'center'} style={{ textDecoration: 'underline', marginTop: '1rem' }}>
                    {item.email}
                  </Typography>
                  <Typography variant='body1' textAlign={'center'} style={{ textDecoration: 'underline', marginTop: '1rem' }}>
                    {item.telefon}
                  </Typography>
                  <Typography variant='body1' textAlign={'center'} style={{ textDecoration: 'underline', marginTop: '1rem' }}>
                    {item.adresse}
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
  const AboutQuery = `*[_type == "about"] { image, contact, email, telefon, adresse, slug,  }`;
  const abouts = await client.fetch(AboutQuery);

  const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
  const backgrounds = await client.fetch(backgroundsQuery)

  return {
    props: { abouts, backgrounds }
  }
}

export default About;
