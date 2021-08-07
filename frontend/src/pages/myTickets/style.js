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

export const Container = styled.section`
    padding: 1rem 10px;
    margin: 0 auto;
    max-width: 1100px;
`;

export const SearchBar = styled.form`
    max-width: 700px;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

export const SearchLeft = styled.div`
    width: 100%;
`;

export const SearchRight = styled.div`
    width: 60px;    
`;

export const SearchInput = styled.input`
    border: 1px solid #c4c4c4;
    height: 100%;
    width: 100%;
    text-indent: 10px;
    font-size: 1rem; 
`;

export const SearchBtn = styled.button`
    border: none;
    background-color: #c4c4c4;
    height: 100%;
    width: 100%;
`;

export const Tickets = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    @media (min-width: 710px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1040px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
