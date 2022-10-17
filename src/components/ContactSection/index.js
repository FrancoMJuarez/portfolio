import React from "react";
import {
  ContactContainer,
  ContactH1,
  ContactForm,
  InputContact,
  InputMessage,
  ContactButton,
  ContactWrapper,
  SocialWrapper,
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

  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>Contact</ContactH1>
        <ContactForm onSubmit={sendEmail}>
          <InputContact
            type="input"
            placeholder="Your Name"
            name="name"
            grid="name"
            first
          ></InputContact>
          <InputContact
            type="input"
            placeholder="Your Mail"
            name="mail"
            grid="mail"
            first
          ></InputContact>
          <InputContact
            type="input"
            placeholder="Write a subject"
            name="subject"
            grid="subject"
          ></InputContact>
          <InputMessage
            type="textarea"
            placeholder="Your Message"
            rows="5"
            name="message"
            grid="message"
          ></InputMessage>
          <ContactButton grid="button">SEND</ContactButton>
        </ContactForm>
        <ContactWrapper>
          <GoMail />
          <p>juarezmfranco@gmail.com</p>
        </ContactWrapper>
        <ContactWrapper>
          <IoCallOutline />
          <p>+54 9 223 4377312</p>
        </ContactWrapper>
        <SocialWrapper>
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
        </SocialWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
