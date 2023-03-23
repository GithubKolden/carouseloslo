import { client, urlFor } from "../../lib/client";
import { Box } from "@mui/material";
import Home from "./index"


const background = ({backgrounds}) => {
          
  return (
    <div container>
    {backgrounds?.map((background) => {
      const images = background.image && background.image.map((image) => ({
        url: urlFor(image).url(),
        alt: background.slug.current
      }));
      return(
    <div background xs={12} key={background.slug.current}>
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
        />
      ))} 
    </div>
    );
  })}
   </div> 
   )};
        
    export const getServerSideProps = async () => {
      const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
      const backgrounds = await client.fetch(backgroundsQuery);
    
      return {
        props: { backgrounds}
      };
    };
export default background