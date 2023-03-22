import { useState, useEffect } from "react";
import { client, urlFor } from '../../lib/client';
import Link from "next/link";
import { TextField, Box, Container, Grid, ButtonGroup, Button } from "@mui/material";
import { useStateContext } from '../../context/StateContext';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';



const Project = ({ projects }) => {
  return (
    <Container id="responsive-container" style={{borderStyle: "none"}}>
      {projects?.map((project) => {
        const images = project.image && project.image.map(image => ({
          url: urlFor(image).url(),
          alt: project.slug.current
        }));

        return (
          <Grid key={project.slug.current} container spacing={2} style={{ marginTop: "7%" }}>
            <Grid item xs={12} md={6}>
            <Carousel
                indicatorIconButtonProps={{
                  style: {
                    color: "white"
                  }
                }}
                navButtonsProps={{
                  style: {
                    backgroundColor: "white",
                  }
                }}
                NextIcon={<KeyboardArrowRight />}
                PrevIcon={<KeyboardArrowLeft />}
              >
                {images.map((image, index) => (
                  <img key={index} src={image.url} alt={image.alt} style={{ width: "100%" }} />
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>{project.description}</p>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
};

export const getServerSideProps = async () => {
  const ProjectsQuery = `*[_type == "project"] { image, description, slug,  }`;
  const projects = await client.fetch(ProjectsQuery);

  return {
    props: { projects, }
  }
}
export default Project