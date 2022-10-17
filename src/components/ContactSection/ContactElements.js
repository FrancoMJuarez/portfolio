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
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 10px 15%;
  grid-template-rows: repeat(4, min-content);
  grid-row-gap: 15px;
  grid-template-areas:
    "name mail"
    "subject subject"
    "message message"
    "button button";
`;

export const InputContact = styled.input`
  grid-area: ${(props) => props.grid};
  background-color: transparent;
  width: ${({ first }) => (first ? "90%" : "95%")};
  height: 50px;
  font-size: 15px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 0px 20px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

export const InputMessage = styled.textarea`
  grid-area: ${(props) => props.grid};
  background-color: transparent;
  width: 95%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  font-size: 15px;
  padding: 10px 20px;
  resize: none;
  color: rgba(0, 0, 0, 0.4);

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

export const ContactButton = styled.button`
  grid-area: ${(props) => props.grid};
  width: 100px;
  height: 40px;
  background-color: transparent;
  font-weight: bold;
  border: 2px solid #00d8ff;
  border-radius: 5px;
  color: #00d8ff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #00d8ff;
    color: white;
    transform: translateY(-5px);
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    font-size: 32px;
    margin-right: 5px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border: 3px solid black;
    border-radius: 30px;
    margin-left: 5px;
    transition: 0.3s ease-in-out;
    font-size: 32px;

    &:hover {
      color: white;
      transform: translateY(-5px);
      background-color: #00d8ff;
      border: 3px solid #00d8ff;
    }
  }
`;
