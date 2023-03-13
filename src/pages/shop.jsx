import { useState, useEffect } from "react";
import { client, urlFor } from '../../lib/client';
import Link from "next/link";
import { TextField, Box, Container, Grid } from "@mui/material";
/*
import { Product } from '../../typings';
interface Props { products: [Product ]; }
*/
const Shop = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Container direction="column" alignItems="center" justify="center" style={{borderStyle: "solid"}}>

        <Grid container direction="column" alignItems="center" justify="center" style={{borderStyle: "none"}}>
          <TextField sx={{ my: 5 }} type="search" id="outlined-basic" label="Search" placeholder="Productname"  variant="outlined" aria-label="Search" aria-describedby="search-addon" onChange={event => setSearchTerm(event.target.value)} />
        </Grid>

          <Grid container justify="center" md={12} style={{borderStyle: "solid"}}>
              {products.filter((product)=>{

                  if (searchTerm== "") { return product }
                  else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) { return product }

                }).map((product) => {
                return (

                    <Grid key={product.slug.current} item direction="column" alignItems="center" md={4} style={{textAlign: "center", borderStyle: "solid"}}>
                      <Link key={product.slug.current} style={{ cursor: "pointer", textDecoration: "none" }} href={`/product/${product.slug.current}`}>
                          <div class="card card-1">
                            <div class="top">
                              <Box key={product.slug.current} sx={{ width: "100%" }} component="img" src={urlFor(product.image && product.image[0]).url()} alt={product.slug.current}/>
                            </div>
                            <div class="bottom">
                              <p>{product.name}</p>
                              <input placeholder="YO!"/>
                            </div>
                          </div>
                      </Link>
                    </Grid>

            )})}
          </Grid>
        
      </Container>
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

// git clone https://github.com/vahid-nejad/nextjs-redux-shopping-cart.git ( RESPONSIVE SHOPPTING CART )

// https://www.youtube.com/watch?v=rWfhwW9forg ( SAVE TO LOCAL WEBBROWSER STORAGE )