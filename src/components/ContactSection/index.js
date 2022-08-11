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

const ContactSection = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>Contact</ContactH1>
        <ContactForm>
          <InputContact type="input" placeholder="Name"></InputContact>
          <InputContact type="input" placeholder="Mail"></InputContact>
          <InputMessage
            type="textarea"
            placeholder="Your Message"
            rows="3"
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
