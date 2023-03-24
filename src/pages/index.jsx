import { Grid, Box, useTheme } from '@mui/material';
import { client, urlFor } from '../../lib/client';
import Background from './background';
import Image from 'next/image';

const Home = ({ logos, backgrounds }) => {
  const theme = useTheme();
  return (
      <div container> 
          <Background backgrounds={backgrounds} />
        {logos?.map((image, index) => (
          <Image
            height={280}
            width={1500}
            component="img"
            style={{ maxWidth: '100%', maxHeight: '100%', position: "absolute", margin: "0", top: "50%", transform: "translateY(-50%)"}}
            src={urlFor(image.logo[0]).url()}
            alt="product images"
            key={image.logo[0]}
          />
        ))}
      </div>
  );
};

export const getServerSideProps = async () => {
  const logoQuery = `*[_type == "home"] { logo, name, slug,  }`;
  const logos = await client.fetch(logoQuery);

  const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
  const backgrounds = await client.fetch(backgroundsQuery)

  return {
    props: { logos, backgrounds }
  }
};
export default Home;