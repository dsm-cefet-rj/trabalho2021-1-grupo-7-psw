import styled from 'styled-components';

export const PageTitle = styled.h2`
  background-color: black;
  color: white;
  width: 100%;
  height: 54px;
  font-size: 1.5rem;
  line-height: 54px;
  margin: 0;
  text-align: center;
  font-weight: 400;
  @media (min-width: 768px) {
    height: 50px;
    line-height: 50px;
  }
`;
export const FormCardWrapper = styled.form`
  padding: 1rem;
  @media (min-width: 768px) {
    border-radius: 0.5rem;
    margin-top: 3rem;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.589);
    padding: 1rem;
  }

  input[type='date'] {
    text-transform: uppercase;
  }
`;
export const FormTitle = styled.h3`
  font-size: 1.58rem;
  margin-bottom: 1rem;
`;
export const DivCardWrapper = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    border-radius: 0.5rem;
    margin-top: 3rem;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.589);
    padding: 1rem;
    height: 800px;
  }

  input[type='date'] {
    text-transform: lowercase;
  }
`;
export const InputText = styled.input`
  height: 2.5rem;
  width: 100%;
  font-size: 1rem;
  padding-left: 0.5rem;
  border: 1px solid black;
  border-radius: 0.2rem;
  @media (min-width: 768px) {
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px 1px rgb(139, 187, 243);
    }
  }
`;

export const ErrorInputs = styled.div`
  width: 100%;
  text-align: left;
  font-size: 14px;
  margin-top: 5px;
  color: red;
`;

export const InputTextarea = styled.textarea`
  resize: none;
  height: 2.5rem;
  width: 100%;
  font-size: 1rem;
  min-height: 150px;
  padding: 5px 8px;
  text-align: justify;
  border: 1px solid black;
  border-radius: 0.2rem;
  outline: none;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 0.4rem;
  margin-top: 1.5rem;
`;

export const ButtonSubmit = styled.button`
  @media (min-width: 768px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  cursor: pointer;
  width: 100%;
  height: 45px;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: ${(props) => {
    const { buttonStyleType } = props;
    if (buttonStyleType === 'delete') {
      return '#B91818';
    }

    if (buttonStyleType === 'update') {
      return '#0974ef';
    }
    if (buttonStyleType === 'create') {
      return '#18B91E';
    }
  }};
`;
//
export const Container = styled.div`
  min-height: 100vh;
  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 0;

    ${PageTitle} {
      height: 50px;
      line-height: 50px;
      color: red;
    }
  }
`;
