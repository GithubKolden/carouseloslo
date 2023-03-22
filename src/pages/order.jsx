import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, TextField, Button } from "@mui/material";
import FileUpload from "react-mui-fileuploader";

const handleFileUploadError = (error) => {
    // Do something...
  }
  
  const handleFilesChange = (files) => {
    // Do something...
    //setUploadedFiles([...files]);
  }

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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    
  };
  const form = useRef();

  return (
    <section id="responsive-container">
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                name="user_name"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                variant="outlined"
                name="subject"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                required
                fullWidth
                multiline
                rows={5}
              />
            </Grid>
            <Grid item xs={12}>

            <FileUpload 
              getBase64={false}
              multiFile={true}
              disabled={false}
              title="Upload pictures"
              header="Drag and drop image here"
              leftLabel="or"
              buttonLabel="click here"
              buttonRemoveLabel="Remove all"
              maxFileSize={10}
              maxUploadFiles={0}
              maxFilesContainerHeight={357}
              acceptedType={'image/*'}
              allowedExtensions={['jpg', 'jpeg']}
              onFilesChange={handleFilesChange}
              onError={handleFileUploadError}
              imageSrc={'path/to/custom/image'}
              BannerProps={{ elevation: 0, variant: "outlined" }}
              showPlaceholderImage={false}
              PlaceholderGridProps={{ md: 4 }}
              LabelsGridProps={{ md: 8 }}
              onContextReady={context => {
                // access to component context here
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
                Send message
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