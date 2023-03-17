import { useState, useEffect } from "react";
import { client, urlFor } from '../../lib/client';
import Link from "next/link";
import { TextField, Box, Container, Grid, ButtonGroup, Button } from "@mui/material";
import { useStateContext } from '../../context/StateContext';
import NoSsr from '@mui/material/NoSsr';
import Image from "next/image";

const Shop = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { image, name, details, price, InStock , ferskhet} = products;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [isInStock, setIsInStock] = useState(InStock);

  const handleAddToCart = () => {
    if (isInStock) {
      onAdd(product, qty);
    }
  };

  const handleFilter = (filterTerm) => {
    if (filterTerm === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.ferskhet === filterTerm));
    }
  };

  return (
    <div>
      <Container direction="column" justify="center" style={{borderStyle: "none", paddingTop: "0.5%"}}>

        <Grid container direction="column" alignItems="center" justify="center" style={{borderStyle: "none"}}>
          <TextField sx={{ my: 5 }} type="search" id="outlined-basic" label="Search" placeholder="Productname" variant="outlined" aria-label="Search" aria-describedby="search-addon" onChange={event => setSearchTerm(event.target.value)} />
        </Grid>

        <Grid container style={{borderStyle: "none", paddingTop: "0.5%"}}>

          
          <Grid item alignItems="center" md={4} style={{textAlign: "center", borderStyle: "none"}}>
            <Button onClick={() => handleFilter("All")}>All</Button>
            <div class="drawed_line_item"></div>
          </Grid>
          
          <Grid item alignItems="center" md={4} style={{textAlign: "center", borderStyle: "none"}}>
            <Button onClick={() => handleFilter("fersk")}>Fresh</Button>
            <div class="drawed_line_item"></div>
          </Grid>
          
          <Grid item alignItems="center" md={4} style={{textAlign: "center", borderStyle: "none"}}>
            <Button onClick={() => handleFilter("tørket")}>Dried</Button>
            <div class="drawed_line_item"></div>
          </Grid>
          
          

          {filteredProducts
            .filter((product)=>{
              if (searchTerm === "") { return product.InStock === true }
              else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) { return product.InStock === true }
            })
            .map((product) => {
              return (
                <Grid key={product.slug.current} item alignItems="center" md={4} style={{textAlign: "center", borderStyle: "none"}}>
                  <Link key={product.slug.current} style={{ cursor: "pointer", textDecoration: "none" }} href={`/product/${product.slug.current}`}>

                    <div className="card card-1">

                      
                        <div className="top">
                          <Image fill key={product.slug.current} sx={{ width: "100%" }} component="img" src={urlFor(product.image && product.image[0]).url()} alt={product.slug.current}/>
                        </div>
                      

                        <div className="bottom">
                          <p>
                            {product.name}
                          </p>
                        </div>

                    </div>
                  </Link>

                  <NoSsr>
                    <div className="Buttons" style={{marginTop: "-3%", marginBottom: "4%"}}>
                      <Button variant="contained" color="success" type="button" style={{ cursor: 'pointer' }} onClick={handleAddToCart}>
                        ADD TO CART
                      </Button>
                    </div>
                  </NoSsr>
                  
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

/*
<Grid container style={{borderStyle: "none"}} justifyContent="center">
<ButtonGroup variant="contained" aria-label="outlined primary button group">

<Grid item alignItems="center" md={4} style={{textAlign: "center", borderStyle: "none"}}>
  <Button onClick={() => handleFilter("All")}>All</Button>
</Grid>

<Grid item alignItems="center" md={4} style={{textAlign: "center", borderStyle: "none"}}>
  <Button onClick={() => handleFilter("fersk")}>Fersk</Button>
</Grid>

<Grid item alignItems="center" md={4} style={{textAlign: "center", borderStyle: "none"}}>
  <Button onClick={() => handleFilter("tørket")}>Tørket</Button>
</Grid>

</ButtonGroup>
</Grid>
*/