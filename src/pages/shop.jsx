import { useState } from "react";
import { client, urlFor } from '../../lib/client';
import Link from "next/link";
import { TextField, Container, Grid, ButtonGroup, Button } from "@mui/material";
import Image from "next/image";
import customImage from "../../public/custom.png";

const Shop = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const handleFilter = (filterTerm) => {
    if (filterTerm === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.ferskhet === filterTerm));
    }
  };

  return (
    <div>
      <Container id="responsive-container-shop" direction="column" justify="center" style={{ borderStyle: "none" }}>

        <Grid container direction="column" alignItems="center" justify="center" style={{borderStyle: "none"}}>
          <TextField sx={{ my: 5 }} type="search" id="outlined-basic" label="Search" placeholder="Productname" variant="outlined" aria-label="Search" aria-describedby="search-addon" onChange={event => setSearchTerm(event.target.value)} />
        </Grid>

        <Grid container style={{borderStyle: "none"}} justifyContent="center">
        <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            style={{ boxShadow: "none" }}
          >
            <Button
              onClick={() => handleFilter("All")}
              style={{ width: "100px" }}
              color={filteredProducts.length === products.length ? "success" : "primary"}
            >
              All
            </Button>
            <Button
              onClick={() => handleFilter(true)}
              style={{ width: "100px" }}
              color={filteredProducts.length !== products.length && filteredProducts[0].ferskhet === true ? "success" : "primary"}
            >
              Fresh
            </Button>
            <Button
              onClick={() => handleFilter(false)}
              style={{ width: "100px" }}
              color={filteredProducts.length !== products.length && filteredProducts[0].ferskhet === false ? "success" : "primary"}
            >
              Dried
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid container justifyContent="center" style={{borderStyle: "none", paddingTop: "0.5%"}}>

          <Grid key="custom-order-card" md={4} style={{textAlign: "center", width: "50%", justifyContent: "center", alignItems: "center" }}>
            <Link key="custom-order-card" style={{ cursor: "pointer", textDecoration: "none", display:"flex"}} href={`/order`}>
              <div className="card card-1" style={{ width: "90%", textAlign:"center"}}>
                <div className="top">
                <Image height={500} width={400} key="custom-order-card" component="img" src={customImage} alt="custom-order-card"/>
                </div>
                <div className="bottom">
                  <p className="card_text">Custom Order</p>
                </div>
              </div>
            </Link>
          </Grid>
          
          {filteredProducts
            .filter((product)=>{
              if (searchTerm === "") { return product.InStock }
              else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) { return product.InStock }
              return false;
            })
            .map((product) => {
              return (
                <Grid key={product.slug.current} md={4} style={{textAlign: "center", width: "50%", justifyContent: "center", alignItems: "center" }}>
                  <Link key={product.slug.current} style={{ cursor: "pointer", textDecoration: "none", display:"flex"}} href={`/product/${product.slug.current}`}>
                    <div className="card card-1" style={{ width: "90%", textAlign:"center"}}>
                      <div className="top">
                        <Image height={500} width={400} key={product.slug.current} component="img" src={urlFor(product.image && product.image[0]).url()} alt={product.slug.current}/>
                      </div>
                      <div className="bottom" style={{ display:"flex" }}>
                        <p className="card_text" id="yo" style={{ }}>
                          {product.name}
                        </p>
                        <p className="card_text_price" style={{width:"40%"}}>{product.price},-</p>

                        
                      </div>
                    </div>
                  </Link>
                </Grid>
              )
            })}
        </Grid>
        
      </Container>

    </div>
  )

  

}

export const getServerSideProps = async () => {
  const ProjectsQuery = `*[_type == "product"] { image, name, slug, price, details, InStock, ferskhet }`;
  const products = await client.fetch(ProjectsQuery);

  return {
    props: { products, }
  }
}



export default Shop;

