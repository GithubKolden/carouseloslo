import Carousel from 'react-bootstrap/Carousel';
import { client, urlFor } from '../../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../../context/StateContext';

const ProductDetails = ({ product }) => {
  const { image, name, details, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart} = useStateContext();

  const handleBuyNow = () => { 
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
      <div className="productContainer border">
        <div className="row justify-content-center mx-5">

          <div className="col-md-5 mt-4 text-center border">
            <Carousel>
              {image?.map((item, i) => (   
                <Carousel.Item>
                  <img src={urlFor(item)}/>  
                </Carousel.Item>   
              ))}
            </Carousel>
          </div>
        
          <div className="col-md-5 mt-4 text-center border border-danger">
            <h1>{name}</h1>
            <p>{details}</p>
            <p>{price}</p>

            <div className='quantity-desc'>
                <button className='btn btn-primary' onClick={decQty}><AiOutlineMinus /></button>
                <span className='num'>{qty}</span>
                <button className='btn btn-primary' onClick={incQty}><AiOutlinePlus /></button>
            </div>

            <div className='buttons'>
              <button type='button' className='btn btn-success' onClick={() => onAdd(product, qty)}>Add to Cart</button>
            </div>

          </div>

        </div>
      </div>
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