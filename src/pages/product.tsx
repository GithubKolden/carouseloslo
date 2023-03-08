import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

const Product = () => {
  const [products, setProducts] = useState<any[]>([]); //List with all products

  /*
  useEffect(() => {
    const getProducts = async () => { //ALLTID BRUK ASYNCH FOR API CALLS

      try {
        const productsCollectionRef = collection(db, "products"); //API key and noSQL table
        const lastPath = window.location.pathname.split("/").pop(); //Retrieve last part of link
        const q = query(productsCollectionRef, where(documentId(), "==", lastPath)); //Creates query with link id
        const querySnapshot = await getDocs(q); // Sends query to firebase. Returns object with product details
        querySnapshot.forEach((doc) => { setProducts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id}))); /*console.log(products) });
      }

      catch(err) { console.log(err, "Feilen ligger i fil: test2.js og fetchAllInnhold feilet") }

    }
    getProducts();
  }, [])
  */

  return (
      <div className="productContainer border">
        <div className="row justify-content-center mx-5">

          <div className="col-md-5 mt-4 text-center border">
            <Carousel>
              {products.map((product) => {
                //const productImageFolder = '../img/products/'+ product.id + '/'+ product.id +'.jpg';
                //console.log(productImageFolder)

                // GOOGLE: HOW TO MAP ALL IMAGES IN A FOLDER REACT
                // PHP EKSEMPEL: https://stackoverflow.com/questions/33940535/pull-all-images-from-a-folder-and-create-bootstrap-carousel-slideshow
                
                return (
                  <Carousel.Item key={product.id}>
                    <img className="img-fluid w-75 mt-4" src={require('../img/products/'+ product.id + '/' + product.id + '.jpg')} alt="First slide"/>
                  </Carousel.Item>
                )})}
            </Carousel>
          </div>
        
          <div className="col-md-5 mt-4 text-center border border-danger">
            {products.map((product) => {
              return (
                <div key={product.id}>

                  <h1 className="mt-5">{product.name}</h1>
                  <p className="mt-2">{product.desc} <br/> Blomsten er: {product.type} <br/> {product.price},-</p>
                  
                </div>
            )})}
          </div>

        </div>
      </div>
  )
}
export default Product;