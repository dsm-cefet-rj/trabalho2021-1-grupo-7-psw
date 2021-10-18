import { setLocale, string, object, date, number, max, min } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

export const createEventSchema = object().shape({
  name: string().required(),
  type: string().required(),
  quantity: number()
    .typeError('Só é aceito números neste campo')
    .positive('Este campo só aceita números')
    .integer()
    .required(msg),
  date: string().required().min(10),
  price: number()
    .typeError('Só é aceito números neste campo')
    .positive()
    .required(msg),
  description: string().required(),
});

export const createBuySchema = object().shape({
  name: string().required(),
  cpf: string()
    .required()
    .min(14, 'O campo de CPF deverá ser preenchido corretamente.'),
  creditCard: string().typeError('O campo obrigatório').required().max(19),
  cvv: number('Este campo só aceita numeros')
    .typeError('O campo obrigatório')
    .required()
    .min(3),
  quantity: number().typeError('O campo obrigatório').integer().required(),
  expiredDate: string().typeError('O campo obrigatório').required().min(10),
});

const msg = 'Esse campo é de preenchimento obrigatório';
export const schemaUpdate = object().shape({
  name: string().required(msg),
  type: string().required(msg),
  quantity: number()
    .typeError('Só é aceito números neste campo')
    .positive('Este campo só aceita números')
    .integer()
    .required(msg),
  date: string().typeError(msg).required(msg).min(10),
  price: number()
    .typeError('Só é aceito números neste campo')
    .positive()
    .required(msg),
  description: string().required(msg),
});
