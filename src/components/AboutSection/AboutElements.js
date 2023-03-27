import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
    color: black;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
    };
`
export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 960px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const AboutRow = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => 
    (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        ${({imgStart}) => 
        (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }

`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    z-index: 1;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`
export const Title = styled.p`
    color: #01bf71;
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Blurb = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    color: white;
`

export const ImageWrapper = styled.div`
    max-width: 350px;
    height: 100%;
`
export const Image = styled.img`
    border-radius: 100%;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const CatPics = styled.a`
    color: white;
`

// export const CCWebsite = styled.a`
//     color: #01bf71;
//     text-decoration: none;
// `

export const fadeIn = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const Fade = styled.div`
  ${props => props.out ?
     `display: none;`
    :`display: inline-block;`
   }
  animation: ${props => 
    props.out ?
    fadeIn 
    : fadeOut} 0.5s linear;
`;