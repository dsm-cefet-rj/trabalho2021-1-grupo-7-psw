import { setLocale, string, object } from 'yup';
import { ptForm } from 'yup-locale-pt'

setLocale(ptForm)

export const loginSchema = object().shape({
    email: string().required().email(),
    password: string().required().min(8)
})