import React from 'react'
import {Redirect} from 'react-router-dom'

import {auth} from './base'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.inputEmail = null
        this.inputSenha = null
        this.state = {
            isLoggedIn: false,
            error: false,
            isLogging: false
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        this.setState({
            isLogging: true,
            error: false
        })
        auth.signInWithEmailAndPassword(this.inputEmail.value, this.inputSenha.value)
        .then( (user) => {
            this.setState({
                isLoggedIn: true
            })
            
        })
        .catch(error => {
            this.setState({
                error: true,
                isLogging: false
            })
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to='/admin' />
        }
        return (
            <div>
                <input type='email' ref={ref => this.inputEmail = ref} />
                <input type='password' ref={ref => this.inputSenha = ref} />
                {this.state.error && <p>Email ou senha inválidos</p>}
                <button onClick={this.handleLogin} disabled={this.state.isLogging}>Entrar</button>
            </div>
        )
    }
}
export default Login