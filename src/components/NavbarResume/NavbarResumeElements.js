import styled from 'styled-components'
import  {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px;
    z-index: 1;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
`;


export const NavItem = styled.p`
    padding-top: 30px;
    padding-right: 16px;
    height: 80px;

`;

export const DownloadButton = styled.a`
    text-decoration: none;
    color: white;
    background: #01bf71;
    border-radius: 80px;
    padding: 12px;

    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: #01bf71;
    }

`


export const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;
    position: flex;
    padding: 100px;
    

    @media screen and (max-width: 960px){
        padding: 90px;
        
    }
`
export const Resume = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
`
