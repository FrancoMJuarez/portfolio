import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative:
    z-index: 1;
    background-color: #f9f9f9;
`;

export const ContactH1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputContact = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  width: 50%;
  height: 15%;
  font-size: 1.25rem;
  border: none;
  color: white;
  border-radius: 1.5625rem;
  padding: 2.5rem;
  margin-bottom: 1.25rem;

  &::placeholder {
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
  } ;
`;

export const InputMessage = styled.textarea`
  background-color: rgba(0, 0, 0, 0.2);
  width: 50%;
  border: none;
  border-radius: 1.5625rem;
  font-size: 1.25rem;
  padding: 1.25rem;
  resize: none;
  color: white;
  margin-bottom: 1.25rem;

  &::placeholder {
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
  } ;
`;

export const ContactButton = styled.button`
  width: 25%;
  height: 3.75rem;
  border: 2px solid black;
  border-radius: 1.5625rem;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: transparent;
    color: black;
    transition: 0.25s;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactLogo = styled.div`
  font-size: 2rem;
`;

export const ContactP = styled.p``;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const SocialItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.125rem;
  width: 3.125rem;
  border: 3px solid black;
  border-radius: 1.875rem;
  margin-left: 0.3125rem;
  transition: 0.3s;
  font-size: 2rem;

  &:hover{
    color: white;
    background-color: #00d8ff;
    border: 3px solid #00d8ff;
    transition: 0.3s;
  }
`;
