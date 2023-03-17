import { client, urlFor } from '../../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../../context/StateContext';
import Carousel from 'react-material-ui-carousel';
import { Box, Container } from '@mui/system';
import { Button } from '@mui/material';
import NoSsr from '@mui/material/NoSsr';

import { useState, useEffect } from "react";


const ProductDetails = ({ product }) => {
  const { image, name, details, price, InStock , ferskhet} = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [isInStock, setIsInStock] = useState(InStock);

  const handleAddToCart = () => {
    if (isInStock) {
      onAdd(product, qty);
    }
  };

  return (
    <NoSsr>
      <Container
        style={{
          marginTop: '50px',
          color: '#494949',
          maxWidth: '525px',
          maxHeight: '40vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Carousel>
            {image?.map((item, index) => {
              return ( 
                <Box
                  component="img"
                  style={{ maxWidth: '525px', maxHeight: '40vh' }}
                  src={urlFor(item)}
                  alt="product images"
                  key={item}
                />
              );
            })}
          </Carousel>

          <div>
            <h1>{name}</h1>
            <p style={{ paddingTop: '15px', paddingBottom: '25px' }}>
              {details}
            </p>
            <p style={{ fontWeight: 'bold' }}>{price},- kr</p>

            <div
              className="quantity-desc"
              style={{ paddingTop: '10px', paddingBottom: '15px' }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={decQty}
                style={{ cursor: 'pointer' }}
              >
                <AiOutlineMinus />
              </Button>
              <span style={{ padding: '10px' }} className="num">
                {qty}
              </span>
              <Button
                variant="contained"
                size="small"
                onClick={incQty}
                style={{ cursor: 'pointer' }}
              >
                <AiOutlinePlus />
              </Button>
            </div>

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
          </div>
        </Box>
      </Container>
    </NoSsr>
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