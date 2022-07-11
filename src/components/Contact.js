import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_14x7pvm",
        "template_906vm44",
        e.target,
        "gYc831mvZ-C7G5YDu"
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

  return (
    <div className="contact">
      <div className="contact-description">
        <div className="contact-description-title">Contact</div>
        <h2>Get in contact with me</h2>
        <p>
          En nuestra oficina siempre hay un mate o un café esperando por vos.
          Pasate, contanos tu proyecto y buscamos la mejor forma de ayudarte.
        </p>
        <ul>
          <li>Direccion</li>
          <li>Numero</li>
          <li>Mail</li>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form-name">
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="contact-form-mail">
          <input type="text" placeholder="Mail" name="mail" required />
        </div>
        <div className="contact-form-message">
          <textarea
            placeholder="Your message"
            rows="3"
            name="message"
            required
          />
        </div>
        <button>Send message</button>
      </form>
    </div>
  );
}

export default Contact;
