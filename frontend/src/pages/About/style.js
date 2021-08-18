import styled from 'styled-components';

export const Main = styled.main`
    margin-bottom: 20px;
    min-height: 85vh;
`;

export const Title = styled.h1`
    font-weight: 550;
    font-size: 22px;
    width: 50%;
    text-align: center;
    color: white;
    background-color: #212020;
    border-radius: 60px;
    word-break: break-word;
    margin: 50px auto;
    padding: 10px 0;
`;


export const Img = styled.img`
border-radius: 50%;   
width: 90%;
height: 90%;
border: 2px solid black;
box-shadow: 0 0 8px black;
transition-duration: 0.3s;
`;

export const Div = styled.div`
    text-align:center;
    margin: 20px;
    height: 15em;
    width: 15em;
    font-weight:550;
    &:hover ${Img} {
        width:100%;
        height:100%;
        box-shadow: none;
        border: 3px solid green;
`;
export const Container = styled.section`
    padding: 1rem 10px;
    margin: 0 auto;
    max-width: 1100px;
`;

export const Text = styled.p`
    margin: 10px 10%;
    font-size: 16px;
    font-weight: 550;
`;