import { client, urlFor } from '../../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../../context/StateContext';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/system';

const ProductDetails = ({ product }) => {
  const { image, name, details, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart} = useStateContext();

  const handleBuyNow = () => { 
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
    <Box>
      <div style={{ marginTop: "50px", color: "#494949", maxWidth: "525px", maxHeight: "40vh"}}>
        <br/>
        <Carousel>
            {
              image?.map((item, index) => {
                return <img style={{maxWidth: "525px", maxHeight: "40vh"}} src={urlFor(item)}/>
              })
            }
        </Carousel>
        <br/>
      </div>

      <div>

        <h1>{name}</h1>
        <p>{details}</p>
        <p>{price}</p>

        <div className='quantity-desc'>
            <button onClick={decQty} style={{cursor: "pointer"}}><AiOutlineMinus /></button>
            <span className='num'>{qty}</span>
            <button onClick={incQty} style={{cursor: "pointer"}}><AiOutlinePlus /></button>
        </div>

        <div className='buttons'>
          <button type='button' style={{cursor: "pointer"}} onClick={() => onAdd(product, qty)}>Add to Cart</button>
        </div>

      </div>
    </Box>
    )
  }

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
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(query);
  
    return {
      props: { product }
    }
  }
export default ProductDetails;