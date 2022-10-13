import React from "react";
import {
  ContactContainer,
  ContactH1,
  ContactForm,
  InputContact,
  InputMessage,
  ContactButton,
  ContactWrapper,
  ContactLogo,
  ContactP,
  SocialWrapper,
  SocialItem
} from "./ContactElements";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import emailjs from "emailjs-com";

const ContactSection = () => {
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

// Anadir animacion cuando se pase el mouse sobre los iconos para que se levanten.

  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>Contact</ContactH1>
        <ContactForm onSubmit={sendEmail}>
          <InputContact type="input" placeholder="Name" name="name"></InputContact>
          <InputContact type="input" placeholder="Mail" name="mail"></InputContact>
          <InputMessage
            type="textarea"
            placeholder="Your Message"
            rows="3"
            name="message"
          ></InputMessage>
          <ContactButton>Send</ContactButton>
        </ContactForm>
        <ContactWrapper>
          <ContactLogo>
            <GoMail />
          </ContactLogo>
          <ContactP>juarezmfranco@gmail.com</ContactP>
        </ContactWrapper>
        <ContactWrapper>
          <ContactLogo>
            <IoCallOutline />
          </ContactLogo>
          <ContactP>+54 9 223 4377312</ContactP>
        </ContactWrapper>
        <SocialWrapper>
          <SocialItem>
            <BsWhatsapp />
          </SocialItem>
          <SocialItem>
            <BsInstagram />
          </SocialItem>
          <SocialItem>
            <BsLinkedin />
          </SocialItem>
          <SocialItem>
            <BsGithub />
          </SocialItem>
        </SocialWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
