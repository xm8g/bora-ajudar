import React from 'react'
import {Redirect} from 'react-router-dom'

import {auth} from './base'

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthing: false,
            isLoggedIn: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isAuthing: false,
                    isLoggedIn: true,
                    user: user
                })
            } else {
                this.setState({
                    isAuthing: false,
                    isLoggedIn: false,
                    user: {}
                })
            }
        })
    }

    render() {
        if (this.state.isAuthing) {
            return <p>Aguarde...</p>
        }
        if (!this.state.isLoggedIn) {
            return <Redirect to='/login' />
        } 
        return (
            <p>{JSON.stringify(this.state)}</p>
        )
        
    }
}
export default Admin
