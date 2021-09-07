import { setLocale, string, object, date, number, max, min } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export const createEventSchema = object().shape({
  name: string().required(),
  type: string().required(),
  quantity: number().typeError("Só é aceito números neste campo").positive("Este campo só aceita números").integer().required(msg),
  date: string().required().min(10),
  price: number().typeError("Só é aceito números neste campo").positive().required(msg),
  description: string().required(),
});

const msg = "Esse campo é de preenchimento obrigatório"
export const schemaUpdate = object().shape({
    name: string().required(msg),
    type: string().required(msg),
    quantity: number().typeError("Só é aceito números neste campo").positive("Este campo só aceita números").integer().required(msg),
    date: string().typeError(msg).required(msg).min(10),
    price: number().typeError("Só é aceito números neste campo").positive().required(msg),
    description: string().required(msg)    
  })