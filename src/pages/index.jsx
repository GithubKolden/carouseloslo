import Image from 'next/image'
import LOGO from './img/LOGO.png';
import { Grid, Box, useTheme } from '@mui/material';
import { client, urlFor } from '../../lib/client';


const Home = ({ items }) => {
  const theme = useTheme();

  return (
    <Grid container>
      {items?.map((item) => {
        const images = item.image && item.image.map((image) => ({
          url: urlFor(image).url(),
          alt: item.slug.current
        }));
        return (
          <Grid item xs={12} key={item.slug.current}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: `${theme.spacing(0)} ${theme.spacing(10)}`, // responsive padding
                  textAlign: 'center', // center align text on small screens
                  [theme.breakpoints.down('sm')]: { // apply styles for small screens
                    padding: `${theme.spacing(0)} ${theme.spacing(5)}`,
                  },
                }}
              >
                <Image
                  src={LOGO}
                  alt="Logo"
                  style={{
                    width: '100%', // adjust size as needed
                  }}
                />
              </div>
            ))}
          </Grid>
        );
      })}
    </Grid>
  );
};
export const getServerSideProps = async () => {
  const ProjectsQuery = `*[_type == "background"] { image, name, slug,  }`;
  const items = await client.fetch(ProjectsQuery);

  return {
    props: { items, }
  }
};
export default Home;

{/*<Box
          sx={{

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${theme.spacing(0)} ${theme.spacing(10)}`, // responsive padding
            textAlign: 'center', // center align text on small screens
            [theme.breakpoints.down('sm')]: { // apply styles for small screens
              padding: `${theme.spacing(0)} ${theme.spacing(5)}`,
              
            },
          }}
        >*/}