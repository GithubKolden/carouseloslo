import { useState, useEffect } from "react";
import { client } from '../../lib/client';

const Shop = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  /*
  useEffect(() => {
    const getProducts = async () => { //ALLWAYS USE ASYNCH FOR API CALLS!

      try {
        const productsCollectionRef = collection(db, "products");
        const data = await getDocs(productsCollectionRef);
        //console.log(data.docs);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //Looping through whole firestore document and adds information about each object with id's in a list
      } 
      
      catch(err) { console.log(err, "Feilen ligger i fil: test2.js og fetchAllInnhold feilet") }

    }
    getProducts();
  }, [])
  */
  return (
    <div className="d-flex justify-content-center">
      <div className="container-flex text-center" style={{ width: "90%", height: "auto" }}>
        <div className="row">
          
          <div className="input-group my-3 col-6 col-sm-3" style={{ width: "500px", margin: "auto" }}>
            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={event => setSearchTerm(event.target.value)}/>
            {/*<button type="button" className="btn btn-primary">search</button>*/}
          </div>

          <div className="overflow-auto" style={{ height: "80vh" }}>
            <div className="row">
              {/*
              {products.filter((product)=>{
                if (searchTerm== "") {
                  return product
                } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return product
                }
              }).map((product) => {
                return (      
                    <a key={product.id} className="col-6 col-sm-3" style={{ cursor: "pointer", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/product/" + product.id);}}>
                      <div className="img">
                        <img src={require('../img/products/' + product.id + '/' + product.id +'.jpg')} alt={product.id} className="img-fluid"/>
                        {product.name}
                      </div>
                    </a>
              )})}
                */}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const ProjectsQuery: any = `*[_type == "product"] {
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
