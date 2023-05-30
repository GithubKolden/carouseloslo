import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, TextField, Button, Typography } from "@mui/material";
import FileUpload from "react-mui-fileuploader";
import customOrderImage from "../../public/custom_flowers.jpeg";
import Image from "next/image";
import {toast } from "react-hot-toast";


const Order = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fxta3wh",
        "template_grwx58f",
        form.current,
        "GM6652oE7iIjKiuvw"
      )
      .then(
        (result) => {console.log(result.text);},
        (error) => {console.log(error.text);},
        toast.success(`✔️ Order Created ✔️`)
      );
    e.target.reset();

  };
  
  const form = useRef();

  return (
    <section id="responsive-container-order">
      <div className="container">
        <h1 style={{textAlign:"center", marginBottom:"2%"}}>Custom Order</h1>
        <form ref={form} onSubmit={sendEmail}>


          <div>
            <Image className="custom_image" height={500} width={750} key="custom-order-image" component="img" src={customOrderImage} alt="custom-order-image"/>

            <Typography>
              This form is intended for individuals who want to order a customized bouquet.
              Describe how you want your bouquet in the description field.
              You can also upload a picture of samples of flowers or in what setting the flowers should be in.
              Fill in contact information so we can reach you when the order is recieved.
            </Typography>
          </div>

          <br/>
  
          <Grid container spacing={2} justify="center">

            <Grid item xs={12} sm={6}>
              <TextField label="Name" variant="outlined" name="user_name" required fullWidth/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField label="Telefon" variant="outlined" name="telefon" required fullWidth/>
            </Grid>
            
            <Grid item xs={12}>
              <TextField label="Email" variant="outlined" name="email" required fullWidth/>
            </Grid>

            <Grid item xs={12}>
              <TextField label="Please describe your custom order here" variant="outlined" name="message" required fullWidth multiline rows={5}/>
            </Grid>

            <Grid item xs={12}>
              <FileUpload 
                name = "file_name"
                getBase64={false}
                multiFile={true}
                disabled={false}
                title="Optional reference picture upload"
                header="Drag and drop image here"
                leftLabel="or"
                buttonLabel="click here"
                buttonRemoveLabel="Remove all"
                maxFileSize={10}
                maxUploadFiles={0}
                maxFilesContainerHeight={357}
                acceptedType={'image/*'}
                allowedExtensions={['jpg', 'jpeg', "png"]}
                imageSrc={'path/to/custom/image'}
                BannerProps={{ elevation: 0, variant: "outlined" }}
                showPlaceholderImage={false}
                PlaceholderGridProps={{ md: 4 }}
                LabelsGridProps={{ md: 8 }}
                onContextReady={context => {
                
                  
                }}
                ContainerProps={{
                  elevation: 0,
                  variant: "outlined",
                  sx: { p: 1 }
                }}
                PlaceholderImageDimension={{
                  xs: { width: 128, height: 128 },
                  sm: { width: 128, height: 128 },
                  md: { width: 164, height: 164 },
                  lg: { width: 256, height: 256 }
                }}
              />

              <Button type="submit" variant="contained" color="primary">
                  Create Order
              </Button>

            </Grid>
          </Grid>
        </form>
      </div>

      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 800px;
          padding: 20px;
        }

        @media (max-width: 600px) {
          .MuiGrid-item {
            width: 100% !important;
          }

          .MuiTextField-root {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
export default Order;
