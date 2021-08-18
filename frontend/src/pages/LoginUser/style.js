import styled from 'styled-components'

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    background-color: #212020;
    color: white;
    font-size: 25px;
    font-weight: 400;
    padding: 10px 0;
    @media (max-width: 420px) {
        margin-bottom: 10px;
    }
`

export const Main = styled.main`
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 69vh;
`

export const Form = styled.form`
    width:80%;
border-radius: 0.5rem;
    text-align: center;;
    @media (max-width: 420px) {
        box-shadow: none;
    }
`;

export const FormTitle = styled.h2`
    font-size: 25px;
    text-align: left;
    color: black;
    font-weight: 900;
    margin-bottom: 50px;
`

export const Label = styled.label`
    display: block ;
    font-weight: 800;
    margin-bottom: 0.4rem ;
    text-align:left;
`;

export const Input = styled.input`
    height: 3.5rem;
    width: 100%;
    font-size: 14px;
    text-indent: 10px;
    padding-left: 0.2rem;
    margin-bottom: 20px;
    border: 1px solid black ;
    border-radius: 0.2rem;
`;

export const Button = styled.button` 
    cursor: pointer;
    width: 10rem;
    height: 45px;
    background: #212020;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    margin-top: 1.5rem;
`;

