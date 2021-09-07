import { setLocale, string, object, date, number, max, min } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);

export const createEventSchema = object().shape({
  name: string().required(),
  type: string().required(),
  quantity: string().required().min(1),
  date: string().required().min(10),
  price: string().required().max(10),
  description: string().required(),
});
