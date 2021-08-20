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
    @media (max-width: 420px) {
        margin-bottom: 10px;
    }
`

export const Container = styled.section`
    max-width: 850px;
    margin: 0 auto;
    padding: 0;
`
export const Line = styled.hr`
    opacity: 25%;
    padding-bottom: px;
`

export const Main = styled.main`
    min-height: 70vh;
`

export const Form = styled.form`
    padding: 2.5rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    @media (max-width: 420px) {
        box-shadow: none;
        padding: 10px;
    }
`;

export const FormTitle = styled.h2`
    font-size: 30px;
    color: black;
    
`
export const Paragraph = styled.p`
    font-size: 16px;
    color: black;
    padding-top: 25px;
    padding-bottom: 5px;
`

export const Label = styled.label`
    display: block ;
    margin-bottom: 1rem ;
    margin-top: 20px;
    text-align:left;
    font-size: 23px;
`;

export const Input = styled.input`
    height: 2.5rem;
    width: 75%;
    font-size: 14px;
    text-indent: 10px;
    padding-left: 0.2rem;
    border: 1px solid black ;
    border-radius: 0.2rem;
`;

export const TextArea = styled.textarea`
    height: 10rem;
    width: 85%;
    font-size: 14px;
    text-indent: 10px;
    padding-top: 10px;
    padding-left: 0.2rem;
    border: 1px solid black ;
    border-radius: 0.2rem;
`;

/*
export const ErrorInputs = styled.div`
    width: 100%;
    text-align: left;
    font-size: 14px;
    margin-top: 5px;
    color: red;
`;*/

export const Button = styled.button` 
    cursor: pointer;
    width: 50%;
    height: 45px;
    background: #212020;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    margin-top: 1.5rem;
`;

