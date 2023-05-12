import { Container, Grid, Box, Typography } from '@mui/material';
import { client, urlFor } from '../../lib/client';
import Background from "../components/background"

const About = ({ abouts, backgrounds }) => {
  console.log(abouts)
  return (
    <>
      <Background backgrounds={backgrounds} style={{ zIndex: -1}} />
      
      <Container id="container-about-contact" sx={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
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
                  <Typography variant='h6' gutterBottom  style={{}}>
                    <h1 style={{textAlign:"Center", marginBottom:"2%"}}>About</h1>
                    {item.about}
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
  const AboutQuery = `*[_type == "about"] { image, about, slug,  }`;
  const abouts = await client.fetch(AboutQuery);

  const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
  const backgrounds = await client.fetch(backgroundsQuery)

  return {
    props: { abouts, backgrounds }
  }
}

export default About;
