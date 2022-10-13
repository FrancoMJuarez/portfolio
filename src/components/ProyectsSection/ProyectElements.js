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
  border-radius: 40px;
  background-color: white;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  padding: 60px 20px;

  @media screen and (max-width: 768px) {
    width: 70vw;
    grid-template-areas: "col1" "col2";
  }

  @media screen and (max-width: 480px) {
    width: 80vw;
  }
`;

export const ProyectImage = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 20% 10%;
  background-size: cover;
  background-position: center;
  grid-area: col1;
`;

export const ProyectDescription = styled.div`
  grid-area: col2;
`;

export const ProyectTitle = styled.div`
  font-size: 30px;
  border-bottom: 2px solid black;
  margin: 0 12px;
`;

export const ProyectText = styled.div`
  padding: 15px 12px;
`;

export const ProyectButtonsSection = styled.div`
  display: flex;
  width: 100%;
`;

export const ProyectButtonWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const ProyectButton = styled.button`
  width: 80%;
  height: 40px;
  border: ${({ primary }) => (primary ? "2px solid #00d8ff" : "2px solid black")};
  border-radius: 25px;
  background-color: ${({ primary }) => (primary ? "#00d8ff" : "black")};
  color: white;
  cursor: pointer;
`;
