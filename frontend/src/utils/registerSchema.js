import { setLocale, string, object, ref } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export const registerUserSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required().email("Preencha um e-mail válido."),
  cpf: string()
    .required()
    .min(14, "O campo de CPF deverá ser preenchido corretamente."),
  password: string()
    .required()
    .min(8, "A senha deverá possuir no mínimo 8 caracteres."),
  confirmPassword: string()
    .required()
    .oneOf([ref("password"), null], "As senhas precisam ser iguais"),
});

export const registerCompSchema = object().shape({
  name: string().required(),
  email: string().required().email("Preencha um e-mail válido."),
  cnpj: string()
    .required()
    .min(18, "O campo de CNPJ deverá ser preenchido corretamente."),
  password: string()
    .required()
    .min(8, "A senha deverá possuir no mínimo 8 caracteres."),
  confirmPassword: string()
    .required()
    .oneOf([ref("password"), null], "As senhas precisam ser iguais"),
});
