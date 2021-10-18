import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({component: Component, ...rest}){
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function verify(){
            let role = rest.role

            if(role === "All"){
                if (localStorage.getItem('user') != null) {
                    setRedirect(false)
                    setLoading(false)
                } else {
                    setRedirect(true)
                    setLoading(false)
                }
            }
            else if(role === "Client"){
                if (localStorage.getItem('user')) {
                    let local = JSON.parse(localStorage.getItem('user'))
                    console.log(local.user.role)

                    if(local.user.role === 0){
                        setRedirect(false)
                        setLoading(false)
                    }
                    else{
                        setRedirect(true)
                        setLoading(false)
                    }
                } else {
                    setRedirect(true)
                    setLoading(false)
                }
            }
            else if(role === "Company"){
                if (localStorage.getItem('user')) {
                    let local = JSON.parse(localStorage.getItem('user'))
                    console.log(local.user.role)

                    if(local.user.role === 1){
                        setRedirect(false)
                        setLoading(false)
                    }
                    else{
                        setRedirect(true)
                        setLoading(false)
                    }
                } else {
                    setRedirect(true)
                    setLoading(false)
                }
            }
        }
        verify()
    },[])

    return(
        loading?"Carregando ...":<Route {...rest} render={props => !redirect?(
            <Component {...props}/>
        ):<Redirect to={{pathname: "/entrar", state: {from: props.location}}} />
    }/>
    )
}

export function NotAuthRoute({component: Component, ...rest}){
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function verify(){
            if (localStorage.getItem('user') != null) {
                setRedirect(true)
                setLoading(false)
            } else {
                setRedirect(false)
                setLoading(false)
            }
        }
        verify()
    },[])

    return(
        loading?"Carregando ...":<Route {...rest} render={props => !redirect?(
            <Component {...props}/>
        ):<Redirect to={{pathname: "/", state: {from: props.location}}} />
    }/>
    )
}