import React from 'react'
import LoginForm from '../LoginForm'
import { LoginData } from '../../model/auth-data'

const LoginPage: React.FC = () => {


    return (
        <LoginForm submitter={(loginData: LoginData) => loginData.email == "kuku@gmail.com" && loginData.password == "kukareku" ? Promise.resolve(true) : Promise.resolve(false)}/>
    )
}

export default LoginPage