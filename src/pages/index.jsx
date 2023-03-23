import { Grid, Box, useTheme } from '@mui/material';
import { client, urlFor } from '../../lib/client';

const Home = ({ backgrounds, logos }) => {
  const theme = useTheme();

  return (
    <Grid container>
      {backgrounds?.map((background) => {
        const images = background.image && background.image.map((image) => ({
          url: urlFor(image).url(),
          alt: background.slug.current
        }));

        return (
          <Grid background xs={12} key={background.slug.current}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  position: "absoulte",
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center center',
                  height: '100vh'
                }}
              > 
              
                  {logos?.map((image, index) => (
                    <Box
                      component="img"
                      style={{ maxWidth: '100%', maxHeight: '100%', position: "absolute", margin: "0", top: "50%", transform: "translateY(-50%)"}}
                      src={urlFor(image.logo[0])}
                      alt="product images"
                      key={image.logo[0]}
                    />
                  ))}

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
  const backgrounds = await client.fetch(ProjectsQuery);

  const logoQuery = `*[_type == "home"] { logo, name, slug,  }`;
  const logos = await client.fetch(logoQuery);

  return {
    props: { backgrounds, logos, }
  }
};
export default Home;