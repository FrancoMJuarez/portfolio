import styled from "styled-components"
import img from "../../images/backgroundhome.jpg"

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: black;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px
    }

    @media screen and (max-width: 480px){
        font-size: 32px
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: black;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px
    }

    @media screen and (max-width: 480px){
        font-size: 18px
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`