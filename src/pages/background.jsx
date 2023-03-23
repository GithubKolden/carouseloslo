import { client, urlFor } from "../../lib/client";
const background = ({backgrounds}) => {
          
  return (
    <div container>
      {backgrounds?.map((background) => {
        const images = background.image && background.image.map((image) => ({
          url: urlFor(image).url(),
          alt: background.slug.current
        }));
        return (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center center',
                  backgroundAttachment: 'fixed',
                  height: '100%',
                  width: '100%',
                }}
              />
            ))} 
          </div>
        );
      })}
    </div> 
  );
  };
        
    export const getServerSideProps = async () => {
      const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
      const backgrounds = await client.fetch(backgroundsQuery);
    
      return {
        props: { backgrounds}
      };
    };
export default background