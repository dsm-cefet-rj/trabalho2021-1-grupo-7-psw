import React from 'react';

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Title, Container, Main, Form, Label, Input, Button, FormTitle,ErrorInputs} from './style.js'
import {useFormik} from 'formik'
import MaskInput from 'react-text-mask'
import * as yup from 'yup'
import {Link} from 'react-router-dom'

export default function RegisterU(){

    const linkStyle = {
        color: "#074AB8"
    }

    const cpfStyle = {
        height: "2.5rem",
        width: "100%",
        fontSize: "14px",
        textIndent: "10px",
        paddingLeft: "0.2rem",
        border: "1px solid black",
        borderRadius: "0.2rem"
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            cpf: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: yup.object({
            firstName: yup
                .string().required("O campo nome precisa ser preenchido."),
            lastName: yup
                .string().required("O campo sobrenome precisa ser preenchido."),
            email: yup
                .string().required("O campo de e-mail precisa ser preenchido.")
                .email("Preencha um e-mail válido."),
            cpf: yup
                .string().required("O campo de CPF precisa ser preenchido.")
                .min(14, "O campo de CPF deverá ser preenchido corretamente."),
            password: yup
                .string().required("O campo de senha precisa ser preenchido.")
                .min(8, "A senha deverá possuir no mínimo 8 caracteres."),
            confirmPassword: yup
                .string().required("O campo de senha precisa ser preenchido.")
                .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
        }),
        onSubmit: (values) =>{
            //HandleSubmit
            const user = {
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                email: formik.values.email,
                cpf: formik.values.cpf,
                password: formik.values.password,
                confirmPassword: formik.values.confirmPassword
            }

            console.log(user)
        }
    })

    return (
        <>
            <Header/>

            <Title>
            Cadastrar-se
            </Title>

            <Main>
                <Container>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormTitle>Cadastro do cliente</FormTitle>

                        <Label htmlFor="firstName">Nome:</Label>
                        <Input type="text" id="firstName" placeholder="Digite seu nome" {...formik.getFieldProps('firstName')}/>
                        {formik.touched.firstName ? <ErrorInputs>{formik.errors.firstName}</ErrorInputs> : null}
                        
                        <Label htmlFor="lastName">Sobrenome</Label>
                        <Input type="text" id="lastName" placeholder="Digite seu sobrenome" {...formik.getFieldProps('lastName')}/>
                        {formik.touched.lastName ? <ErrorInputs>{formik.errors.lastName}</ErrorInputs> : null}
                        
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type="email" id="email" placeholder="Digite seu e-mail" {...formik.getFieldProps('email')}/>
                        {formik.touched.email ? <ErrorInputs>{formik.errors.email}</ErrorInputs> : null}
                        
                        <Label htmlFor="CPF">CPF:</Label>
                        <MaskInput type="text" id="CPF" style={cpfStyle}
                            mask={[
                                /[0-9]/,
                                /[0-9]/,
                                /[0-9]/,
                                '.',
                                /[0-9]/,
                                /[0-9]/,
                                /[0-9]/,
                                '.',
                                /[0-9]/,
                                /[0-9]/,
                                /[0-9]/,
                                '-',
                                /[0-9]/,
                                /[0-9]/
                            ]}
                            guide={false} //Serve para ir completando aos poucos
                            type="text" id="CPF" placeholder="Digite seu CPF" {...formik.getFieldProps('cpf')}
                        />
                        {formik.touched.cpf ? <ErrorInputs>{formik.errors.cpf}</ErrorInputs> : null}
                        <Label htmlFor="password">Senha:</Label>
                        <Input type="password" id="password" placeholder="Digite sua senha" {...formik.getFieldProps('password')}/>
                        {formik.touched.password ? <ErrorInputs>{formik.errors.password}</ErrorInputs> : null}
                        <Label htmlFor="confirmPassword">Confirmar senha:</Label>
                        <Input type="password" id="confirmPassword" placeholder="Confirme sua senha" {...formik.getFieldProps('confirmPassword')}/>
                        {formik.touched.confirmPassword ? <ErrorInputs>{formik.errors.confirmPassword}</ErrorInputs> : null}

                        <Button type="submit" className="submitButton" disabled={!formik.isValid}>
                        Criar conta
                        </Button>

                        <Link to='/entrar' style={linkStyle}>Voltar ao login</Link>

                    </Form>
                </Container>
            </Main>
            <Footer/>
               
        </>
    )
}
