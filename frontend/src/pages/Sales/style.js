import styled from 'styled-components';

export const Main = styled.main`
    margin-bottom: 20px;
    min-height: 85vh;
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    background-color: #212020;
    color: white;
    font-size: 25px;
    font-weight: 400;
    padding: 10px 0;
`;


export const Text = styled.h1`
    width: 100%;
    margin-top: 15px;
    text-align: left;
    color: #212020;
    font-size: 20px;
    font-weight: 800;
`;

export const Container = styled.section`
    padding: 1rem 10px;
    margin: 0 auto;
    max-width: 1100px;
`;

export const SaleDivs = styled.div`
    margin: 15px 0;
    > h3{
        font-size: 1.2rem;
        margin-bottom: 7px;
    }
    > p{
        margin-bottom: 3px;
    }
    > img {
        width: 150px;
    }
    @media(min-width: 659px){
        width: 32%;
        margin: 10px 0;
    }
    @media(min-width: 900px){
        width: 24%;
    }
`;

export const SaleContainer = styled.section`
    margin-bottom: 20px;
    width: 100%;
    border-bottom: 1px solid darkgrey;
    border-top: 1px solid darkgrey;
    ${SaleDivs}:first-child {
        display: none;
        @media(min-width: 900px){
            display: block;
            > img{
                width: 150px;
            }
            
        }
    }
    @media(min-width: 659px){
        display: flex;
        justify-content: space-between;
    }
`;

export const SaleValue = styled.p`
    font-weight: 550;
`