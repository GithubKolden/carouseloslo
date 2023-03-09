import Carousel from 'react-bootstrap/Carousel';
import { client, urlFor } from '../../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
//import { GetStaticProps, GetStaticPaths } from 'next';
/*
import { Product } from '../../../typings';
interface Props { products: [Product]; };
*/
const ProductDetails = ({ product }) => {

  const { image, name, details, price } = product;

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
                <span className='minus' onclick=""><AiOutlineMinus /></span>
                <span className='num' onclick="">0</span>
                <span className='minus' onclick=""><AiOutlinePlus /></span>
            </div>

            <div className='buttons'>
              <button type='button' className='btn btn-success' onClick=''>Add to Cart</button>
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
    //const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    //const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { product }
    }
  }



export default ProductDetails;