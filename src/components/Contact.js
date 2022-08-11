import React from "react";
import emailjs from "emailjs-com";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

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
      <h1>CONTACT</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Mail" name="mail" required />
        <textarea placeholder="Your message" rows="3" name="message" required />
        <button>Send</button>
      </form>
      <div className="contact-icons">
        <div className="contact-icons-mail">
          <GoMail /> <p>juarezmfranco@gmail.com</p>
        </div>
        <div className="contact-icons-phone">
          <IoCallOutline /> <p>+54 9 223 4377312</p>
        </div>
        <div className="contact-icons-group">
          <div>
            <BsWhatsapp />
          </div>
          <div>
            <BsInstagram />
          </div>
          <div>
            <BsLinkedin />
          </div>
          <div>
            <BsGithub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
