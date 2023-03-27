import styled from "styled-components"


export const ProjectContainer = styled.div`
    height: 960px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 12px;

    @media screen and (max-width: 1000px){
        font-size: 2rem;
    }
`

export const ProjectBlurb = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 32px;
`

export const RepoCardContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 32px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        padding: 0 20px;

    }
`

export const RepoCardWrapper = styled.div`
    position: relative;
    z-index: 1;
    border: 1px solid gray;
    border-radius: 5px;
    width: 400px;
    height: 180px;
    margin: 0 0 10px 0;
    padding-top: 10px;
    padding-left: 15px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const RepoTitle = styled.a`
    z-index: 2;
    color: blue;
    font-weight: bold;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`

export const RepoDescription = styled.p`
    padding-top: 7px;
    font-size: 1rem;
    color: dark-gray;
`
export const Language = styled.p`
    z-index: 2;
    position: absolute;
    bottom: 5px;
    font-size: 0.8rem;
    color: #828181;
`