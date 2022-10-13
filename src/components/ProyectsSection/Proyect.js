import React from "react";
import { ProyectMain, ProyectContainer, ProyectImage, ProyectDescription, ProyectTitle, ProyectText, ProyectButtonsSection, ProyectButtonWrapper, ProyectButton } from "./ProyectElements";

const Proyect = ({popUp, closePopUp}) => {
  const openSite = () => {
    window.open(popUp.link, "_blank");
  };

  return (
  <>
  {popUp.toggle? (
              <ProyectMain id="proyectmain">
              <ProyectContainer>
                <ProyectImage className={popUp.number} />
                <ProyectDescription>
                  <ProyectTitle>{popUp.title}</ProyectTitle>
                  <ProyectText>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat.
                  </ProyectText>
                  <ProyectButtonsSection>
                  <ProyectButtonWrapper>
                    <ProyectButton primary onClick={() => openSite()}>
                      Enter
                    </ProyectButton>
                  </ProyectButtonWrapper>
                  <ProyectButtonWrapper>
                    <ProyectButton onClick={() => closePopUp(false)}>
                      Back
                    </ProyectButton>
                  </ProyectButtonWrapper>
                  </ProyectButtonsSection>
                </ProyectDescription>
              </ProyectContainer>
            </ProyectMain>
      ) : (
        ""
    )}
  </>
  );
};

export default Proyect;
