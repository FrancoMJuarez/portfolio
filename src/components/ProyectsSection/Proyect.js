import React from "react";
import {
  ProyectButton,
  ProyectContainer,
  ProyectDescription,
  ProyectImage,
  ProyectMain,
  ProyectText,
  ProyectTitle,
  ProyectButtonWrapper,
} from "./ProyectElements";

function Proyect({ popUp, closePopUp }) {
  return (
    <>
      {popUp.toggle ? (
        <ProyectMain>
          <ProyectContainer>
            <ProyectImage image={popUp.image} />
            <ProyectDescription>
              <ProyectTitle>{popUp.title}</ProyectTitle>
              <ProyectText>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </ProyectText>
              <ProyectButtonWrapper>
                <ProyectButton onClick={() => closePopUp(false)}>
                  Back
                </ProyectButton>
              </ProyectButtonWrapper>
            </ProyectDescription>
          </ProyectContainer>
        </ProyectMain>
      ) : (
        ""
      )}
    </>
  );
}

export default Proyect;
