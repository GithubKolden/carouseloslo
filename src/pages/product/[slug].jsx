import { client, urlFor } from '../../../lib/client';
import { useStateContext } from '../../../context/StateContext';
import Carousel from 'react-material-ui-carousel';
import { Box, Container } from '@mui/system';
import { Button, Grid} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import { useState } from "react";

const ProductDetails = ({ product }) => {
  const { image, name, details, price, InStock, ferskhet } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [isInStock, setIsInStock] = useState(InStock);

  const handleAddToCart = () => {
    if (isInStock) {
      onAdd(product, qty);
    }
  };
  return (
    <Container id="responsive-container-slug" style={{ color: '#494949' }}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <Box textAlign="center" style={{ maxWidth: '100%', maxHeight: '100%' }}>
          <Carousel
                indicatorIconButtonProps={{ style: {color: "white"} }}
                navButtonsProps={{ style: {backgroundColor: "white"} }}
                NextIcon={<KeyboardArrowRight />}
                PrevIcon={<KeyboardArrowLeft />}
              >
              {image?.map((item, index) => {
                return (
                  <Image className='product_image'
                    height={600}
                    width={500}
                    quality={90}
                    component="img"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    src={urlFor(item).url()}
                    alt="product images"
                    key={item}
                  />
                );
              })}
            </Carousel>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box>
            <h1>{name}</h1>
            <p style={{ paddingTop: '15px', paddingBottom: '25px' }}>
              {details}
            </p>
            <p style={{ fontWeight: 'bold',paddingBottom: '10px' }}>{price},- kr</p>

            <div className="Buttons">
              <Button
                variant="contained"
                color="success"
                type="button"
                style={{ cursor: 'pointer' }}
                onClick={handleAddToCart}
                disabled={!isInStock}
              >
                {isInStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: { product }
  }
}
export default ProductDetails;