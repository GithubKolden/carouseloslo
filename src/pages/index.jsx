import { Grid, Box, useTheme } from '@mui/material';
import { client, urlFor } from '../../lib/client';
import Background from '../components/background';
import Image from 'next/legacy/image';

const Home = ({ logos, backgrounds }) => {
  const theme = useTheme();
  return (
    <div container> 
      <Background backgrounds={backgrounds} />
      {logos?.map((image, index) => (
        <div style={{
          paddingTop: `${(100 * 250) / 1500}%`, /* set the aspect ratio to 250:1500 */
          maxWidth: '100%',
          height: 0, /* make the height 0 to avoid distortion */
          margin: "0",
          top: "50%",
        }} key="logo">
          <Image
            quality={80}
            layout="fill"
            objectFit="contain"
            src={urlFor(image.logo[0]).url()}
            alt="product images"
            key={image.logo[0]}
          />
        </div>
      ))}
      <style jsx>{`
        @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
          div {
            height: auto; /* reset the height to auto for smaller screens */
            padding-top: ${100 / (1500 / 250)}%; /* reset the aspect ratio */
          }
        }
      `}</style>
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