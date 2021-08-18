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
    max-width: 400px;
    margin: 0 auto;
    padding: 0;
`
export const Main = styled.main`
    min-height: 70vh;
`

export const Form = styled.form`
    padding: 2.5rem 1rem;
    border-radius: 0.5rem;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.589);
    margin-bottom: 2rem;
    @media (max-width: 420px) {
        box-shadow: none;
        padding: 10px;
    }
`;

export const FormTitle = styled.h2`
    font-size: 25px;
    text-align: center;
    color: black;
    margin-bottom: 30px;
`

export const Label = styled.label`
    display: block ;
    margin-bottom: 0.4rem ;
    margin-top: 20px;
    text-align:left;
`;

export const Input = styled.input`
    height: 2.5rem;
    width: 100%;
    font-size: 14px;
    text-indent: 10px;
    padding-left: 0.2rem;
    border: 1px solid black ;
    border-radius: 0.2rem;
`;

export const ErrorInputs = styled.div`
    width: 100%;
    text-align: left;
    font-size: 14px;
    margin-top: 5px;
    color: red;
`;

export const Button = styled.button` 
    cursor: pointer;
    width: 100%;
    height: 45px;
    background: #212020;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    margin-top: 1.5rem;
    margin-bottom: 20px;
`;

export const Hr = styled.hr`
    color:black;
    margin-bottom: 12px;
`

export const RegisterFlex = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 420px){
        flex-direction: row;
        justify-content: space-between;
    }
`
export const RegisterBtn = styled.button` 
    cursor: pointer;
    width: 100%;
    height: 50px;
    background: darkgrey;
    color: white;
    font-weight:bold;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    @media(min-width: 420px){
        width: 150px;
    }
`;
