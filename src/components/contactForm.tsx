import React, {useRef} from "react"
import emailjs from "emailjs-com"

function EmailForm() {

  const form = useRef()

  function sendEmail(e: any) {
      e.preventDefault();

    emailjs.sendForm('gmail', 'template_lyb9m32', form.current, 'ylwJXj9X9pYw3BEKW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div>
     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    )
}

export default EmailForm;