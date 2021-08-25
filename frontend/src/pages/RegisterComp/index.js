import React, { useState } from "react";
import { baseUrl } from "../../utils/backendUrl";
import axios from "axios";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {
  Title,
  Container,
  Main,
  Form,
  Label,
  Input,
  Button,
  FormTitle,
  ErrorInputs,
} from "../RegisterUser/style";
import { useFormik } from "formik";
import MaskInput from "react-text-mask";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { registerCompany } from "../../services/register";
import { history } from "../../history";

export default function RegisterComp() {
  const linkStyle = {
    color: "#074AB8",
  };

  const cnpjStyle = {
    height: "2.5rem",
    width: "100%",
    fontSize: "14px",
    textIndent: "10px",
    paddingLeft: "0.2rem",
    border: "1px solid black",
    borderRadius: "0.2rem",
  };

  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cnpj: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("O campo nome precisa ser preenchido."),
      email: yup
        .string()
        .required("O campo de e-mail precisa ser preenchido.")
        .email("Preencha um e-mail válido."),
      cnpj: yup
        .string()
        .required("O campo de CNPJ precisa ser preenchido.")
        .min(18, "O campo de CNPJ deverá ser preenchido corretamente."),
      password: yup
        .string()
        .required("O campo de senha precisa ser preenchido.")
        .min(8, "A senha deverá possuir no mínimo 8 caracteres."),
      confirmPassword: yup
        .string()
        .required("O campo de senha precisa ser preenchido.")
        .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),
    }),
    onSubmit: (values) => {
      //HandleSubmit
      const comp = {
        name: formik.values.name,
        email: formik.values.email,
        cnpj: formik.values.cnpj,
        password: formik.values.password,
        confirmPassword: formik.values.confirmPassword,
      };

      registerCompany(
        comp.name,
        comp.email,
        comp.cnpj,
        comp.password,
        comp.confirmPassword
      )
        .then((res) => {
          setError(null);
          history.push("/");
        })
        .catch((error) => {
          let errorMsg = error.response.data;
          setError(errorMsg);
        });
    },
  });

  return (
    <>
      <Header />

      <Title>Cadastrar-se | Empresa</Title>

      <Main>
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <FormTitle>Cadastro da empresa</FormTitle>

            <Label htmlFor="name">Nome:</Label>
            <Input
              type="text"
              id="name"
              placeholder="Digite o nome da empresa"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name ? (
              <ErrorInputs>{formik.errors.name}</ErrorInputs>
            ) : null}

            <Label htmlFor="email">E-mail:</Label>
            <Input
              type="email"
              id="email"
              placeholder="Digite o e-mail da empresa"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email ? (
              <ErrorInputs>{formik.errors.email}</ErrorInputs>
            ) : null}

            <Label htmlFor="cnpj">CNPJ:</Label>
            <MaskInput
              type="text"
              id="cnpj"
              style={cnpjStyle}
              mask={[
                /[0-9]/,
                /[0-9]/,
                ".",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                ".",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "/",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
              ]}
              guide={false} //Serve para ir completando aos poucos
              type="text"
              id="cnpj"
              placeholder="Digite o CNPJ da empresa"
              {...formik.getFieldProps("cnpj")}
            />
            {formik.touched.cnpj ? (
              <ErrorInputs>{formik.errors.cnpj}</ErrorInputs>
            ) : null}

            <Label htmlFor="password">Senha:</Label>
            <Input
              type="password"
              id="password"
              placeholder="Digite a senha"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password ? (
              <ErrorInputs>{formik.errors.password}</ErrorInputs>
            ) : null}

            <Label htmlFor="confirmPassword">Confirmar senha:</Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirme a senha"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword ? (
              <ErrorInputs>{formik.errors.confirmPassword}</ErrorInputs>
            ) : null}

            {error ? <ErrorInputs>{error}</ErrorInputs> : null}
            <Button
              type="submit"
              className="submitButton"
              disabled={!formik.isValid}
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
