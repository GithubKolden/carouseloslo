import React from 'react';
import { Box, Grid, Typography } from '@mui/material';


const About = () => {
  return (
  
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundImage: 'url("https://www.pngmagic.com/product_images/eCommerce-website-banner-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <img src="https://melkoghonning.no/wp-content/uploads/2020/09/carousel-hovedbilde.jpg" alt="Your Image" style={{ maxWidth: '100%', marginTop: "10%", marginLeft: "1%" }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" gutterBottom marginTop={'10%'} textAlign={'center'}>
          About Our Website
        </Typography>
        <Typography variant="body1" textAlign={'center'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna ut ligula consequat luctus. 
          Aenean in magna nec risus malesuada ultricies. Sed ut justo libero. 
          Nam sagittis nisl ut velit pretium, a semper orci feugiat. Sed lacinia lobortis faucibus. 
          Sed luctus interdum aliquam. 
        </Typography>
      </Grid>
    </Grid>
    </Box>
    </Grid>
    </Grid>
    
  );
};

export default About;