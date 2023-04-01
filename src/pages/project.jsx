import { useState, useEffect } from "react";
import { client, urlFor } from '../../lib/client';
import Link from "next/link";
import { TextField, Box, Container, Grid, ButtonGroup, Button , Typography} from "@mui/material";
import { useStateContext } from '../../context/StateContext';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';
import Background from "./background"

const FrostedBox = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(10px)",
  borderRadius: "10px",
  padding: "2rem",
});

const Project = ({ projects, backgrounds }) => {
  return (
    <div>
      <Background backgrounds={backgrounds} style={{ zIndex: -1 }} />
      <Box sx={{ position: 'absolute', top: '70px', bottom: "70px", left: 0, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 1 }}>
        <Typography variant='h3' gutterBottom>Projects</Typography>
      </Box>
      <Container id="responsive-container-project" style={{ borderStyle: "none", marginTop: '135px' }} >

        {projects?.map((project) => {
          const images = project.image && project.image.map(image => ({
            url: urlFor(image).url(),
            alt: project.slug.current
          }));

          return (
            <FrostedBox key={project.slug.current} style={{ marginTop: "7%" }}>
              <Grid container spacing={2}>
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
            </FrostedBox>
          );
        })}
      </Container>
    </div>

  );
};

export const getServerSideProps = async () => {
  const ProjectsQuery = `*[_type == "project"] { image, description, slug,  }`;
  const projects = await client.fetch(ProjectsQuery);

  const backgroundsQuery = `*[_type == "background"] { image, name, slug }`;
  const backgrounds = await client.fetch(backgroundsQuery)

  return {
    props: { projects, backgrounds }
  }
}
export default Project;
