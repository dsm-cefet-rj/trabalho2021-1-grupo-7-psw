import React, { useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {Title,Container,Main,Form,Label,Input,Button,FormTitle,ErrorInputs,} from "../RegisterUser/style";
import { Link } from "react-router-dom";
import { registerCompany } from "../../services/register";
import { history } from "../../history";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import { registerCompSchema } from "../../utils/registerSchema";

const normalizeCnpj = value =>{
  function formatCnpj(text) {
    const badchars = /[^\d]/g
    const mask = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
    const cnpj = new String(text).replace(badchars, "");
    return cnpj.replace(mask, "$1.$2.$3/$4-$5").substr(0,18) || "";
  }
  return formatCnpj(value)
}

export default function RegisterComp() {
  const linkStyle = {
    color: "#074AB8",
  };

  const [erro, setErro] = useState(null);

  const {register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(registerCompSchema)
  })

  const registerSubmit = async (comp) => {

    try {
      await registerCompany(comp.name, comp.email ,comp.cnpj, comp.password,comp.confirmPassword);
      setErro(null);
      history.push('/');

    } catch (error) {
      let msgErro = error.response.data.msg;
      setErro(msgErro);
    }
  };

  return (
    <>
      <Header />

      <Title>Cadastrar-se | Empresa</Title>

      <Main>
        <Container>
          <Form onSubmit={handleSubmit(registerSubmit)}>
            <FormTitle>Cadastro da empresa</FormTitle>

            <Label htmlFor="name">Nome:</Label>
            <Input
              type="text"
              id="name"
              placeholder="Digite o nome da empresa"
              {...register("name")}
            />
            <ErrorInputs>{errors.name?.message}</ErrorInputs>

            <Label htmlFor="email">E-mail:</Label>
            <Input
              type="email"
              id="email"
              placeholder="Digite o e-mail da empresa"
              {...register("email")}
            />
            <ErrorInputs>{errors.email?.message}</ErrorInputs>

            <Label htmlFor="cnpj">CNPJ:</Label>
            <Input
              type="text"
              id="cnpj"
              placeholder="Digite o CNPJ"
              {...register("cnpj")}
              onChange={(event)=>{
                const {value} = event.target
                event.target.value = normalizeCnpj(value)
              }}
            />
            <ErrorInputs>{errors.cnpj?.message}</ErrorInputs>

            <Label htmlFor="password">Senha:</Label>
            <Input
              type="password"
              id="password"
              placeholder="Digite a senha"
              {...register("password")}
            />
            <ErrorInputs>{errors.password?.message}</ErrorInputs>

            <Label htmlFor="confirmPassword">Confirmar senha:</Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirme a senha"
              {...register("confirmPassword")}
            />
            <ErrorInputs>{errors.confirmPassword?.message}</ErrorInputs>

            {erro ? <ErrorInputs>{erro}</ErrorInputs> : null}
            <Button
              type="submit"
              className="submitButton"
            >
              Criar conta
            </Button>

            <Link to="/entrar" style={linkStyle}>
              Voltar ao login
            </Link>
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
