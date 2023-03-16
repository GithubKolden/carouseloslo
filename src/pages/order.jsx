import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, TextField, Button } from "@mui/material";

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
    <section>
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