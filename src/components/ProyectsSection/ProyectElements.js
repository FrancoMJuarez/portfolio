import styled from "styled-components";

export const ProyectMain = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const ProyectContainer = styled.div`
  width: 60vw;
  height: 80vh;
  border-radius: 2.5rem;
  background-color: white;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: 'col1 col2';
  padding: 3.75rem 1.25rem;

  @media screen and (max-width: 768px) {
    width: 70vw;
    grid-template-areas: 'col1' 'col2'
  }

  @media screen and (max-width: 480px) {
    width: 80vw;
  }
`;

export const ProyectImage = styled.div`
  border: 1px solid black;
  border-radius: 1.25rem;
  padding: 20% 10%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  grid-area: col1;
`;

export const ProyectDescription = styled.div`
  grid-area: col2;
`;

export const ProyectTitle = styled.div`
  font-size: 1.875rem;
  border-bottom: 2px solid black;
  margin: 0 0.675rem;
`;

export const ProyectText = styled.div`
  padding: 0.9375rem 0.675rem;
`;

export const ProyectButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProyectButton = styled.button`
  width: 30%;
  height: 2.5rem;
  border: 2px solid black;
  border-radius: 1.5625rem;
  background-color: black;
  color: white;
  cursor: pointer;
`;
