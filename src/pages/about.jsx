import { Container, Grid, Box, Typography } from '@mui/material';
import { client, urlFor } from '../../lib/client';

const About = ({abouts}) => {
//const { image, contact, email, telefon, adresse} = abouts;
//console.log(abouts[0].adresse)
  
  return (
    <Container id="responsive-container-about">
      
      <Grid container justifyContent='center'>
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: "2%"}}>
          <h1>About</h1>
        </Box>
      </Grid>
      <Grid container justifyContent='center' spacing={2} style={{ border: 'none', color: 'red', position: 'relative'}}>
        <Grid item xs={12} sm={6}>
          {abouts?.map((item, index) =>(
            <Box 
            component="img"
            src={urlFor(item.image[0])}
            alt="about images"
            key={item.image[0]}
            style={{widht: "10vh", height:"60vh"}}
            >
          </Box>
          ))}
          <Grid item xs={12} sm={6}>
          <Box id="contact-box-1" sx={{ justifyContent: 'center', borderStyle: "none" }}>
            <Typography variant='h4' gutterBottom textAlign={'center'}>
              {abouts[0].contact}
            </Typography>
            <Typography variant = 'body1' textAlign={'center'} style={{textDecoration: 'underline', marginTop: '1rem'}}>
              {abouts[0].email}
            </Typography>
            <Typography variant = 'body1' textAlign={'center'} style={{textDecoration: 'underline', marginTop: '1rem'}}>
             {abouts[0].telefon}
            </Typography>
            <Typography variant = 'body1' textAlign= {'center'} style={{textDecoration: 'underline', marginTop: '1rem'}}>
              {abouts[0].adresse}
            </Typography>
          </Box>
        </Grid>
          
        </Grid>
        

      </Grid>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const AboutQuery = `*[_type == "about"] { image, contact, email, telefon, adresse, slug,  }`;
  const abouts = await client.fetch(AboutQuery);

  return {
    props: { abouts, }
  }
}
export default About;