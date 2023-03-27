import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: black;
`
export const FooterWrapper = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700px;
    max-width: 1100px;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: grid;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
    grid-gap: 100px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        grid-gap: 25px;
    }
`

export const FooterTitle = styled.h1`
    font-size: 2.5rem;
    margin-top: 0;
    text-align: center;
    color: white;
    margin-bottom: 96px;
`

export const FooterLink = styled.div`
    text-align: center;
    font-size: 5rem;
    margin-bottom: 36px;
    transition: all 0.4s ease-in-out;
    
    &:hover {
        transform: scale(1.2);
        transition: all 0.4s ease-in-out;
        cursor: pointer;
    }
`

export const MadeWithWrapper = styled.div`
    padding-left: 15px;
    padding-bottom: 15px;
    width: 210px;
    justify-content: right;
    align-items:center;
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: all 0.4s ease-in-out;
        cursor: pointer;
    }
`

export const MadeWithText = styled.p`
    font-size: 1.25rem;
    color: white;
`

export const IconWrapper = styled.p`
    font-size: 1.25rem;
    
`