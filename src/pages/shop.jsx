import { useState, useEffect } from "react";
import { client, urlFor } from '../../lib/client';
import Link from "next/link";
//import { Product } from '../../typings';
/*
interface Props { products: [Product ]; }
*/
const Shop = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="d-flex justify-content-center">
      <div className="container-flex text-center" style={{ width: "90%", height: "auto" }}>
        <div className="row">
          
          <div className="input-group my-3 col-6 col-sm-3" style={{ width: "500px", margin: "auto" }}>
            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={event => setSearchTerm(event.target.value)}/>
          </div>

          <div className="overflow-auto" style={{ height: "80vh" }}>
            <div className="row">

            {products.filter((product)=>{
                if (searchTerm== "") {
                  return product
                } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return product
                }
              }).map((product) => {
                
              return (
                <Link key={product.slug.current} className="col-6 col-sm-3" style={{ cursor: "pointer", textDecoration: "none" }} href={`/product/${product.slug.current}`}>
                  <div className="img">
                      <img src={urlFor(product.image && product.image[0]).url()} alt={product.slug.current} className="img-fluid"/>
                      {product.name}
                  </div>
                </Link>
            )})}

            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const ProjectsQuery = `*[_type == "product"] {
    image,
    name,
    slug,
    price,
    details
  }`;
  const products = await client.fetch(ProjectsQuery);

  return {
    props: { products, }
  }
}


export default Shop;

/* align: "center" divNR3 SKAL VÆRE <Link> i stedet for <a> tag!!! */
