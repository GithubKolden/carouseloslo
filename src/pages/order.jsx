import {useRef} from "react";
import emailjs from "@emailjs/browser";

const Order = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fxta3wh', 'template_grwx58f', form.current, 'GM6652oE7iIjKiuvw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    const form = useRef()

    return(
        <section>
            <div className="container">
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text"
                    placeholder="navn"
                    name="user_name" required /> 
                    <input type="text"
                    placeholder="Email"
                    name="email" required /> 
                    <input type="text"
                    placeholder="Subject"
                    name="subject" required /> 
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <button type="submit" className="--btn-primary">send message</button>
                    
                </form>
            </div>
        </section>
    )
}

export default Order;