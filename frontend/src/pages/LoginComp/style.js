import styled from 'styled-components'


export const Title = styled.h1`
    width: 100%;
    text-align: center;
    background-color: #212020;
    color: white;
    font-size: 25px;
    font-weight: 400;
    padding: 10px 0;
    margin-bottom: 40px;
`

export const Container = styled.section`
    max-width: 25%;
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 0;
    @media (max-width: 700px) {
        max-width: 80%;
        margin-bottom: 10rem;
    }


`
export const Main = styled.main`
    min-height: 70vh;
`

export const Form = styled.form`
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 3rem;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.589);
    padding: 1rem;
    height: 400px;
    
`;

export const Label = styled.label`
    display: block ;
    margin-bottom: 0.4rem ;
`

export const Input = styled.input`
    height: 2.5rem;
    width: 60%;
    font-size: 1rem;
    padding-left: 0.2rem;
    margin-bottom: 1rem !important;
    border: 1px solid black ;
    border-radius: 0.2rem;
`;

export const Button = styled.button` 
    cursor: pointer;
    width: 50%;
    height: 45px;
    background: #212020;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    margin-top: 3rem;
`;

