import React, { useState } from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import {login} from '../../redux/session/session.actions'
import { emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit = async event => {
        event.preventDefault();
        
        const user = Object.assign({}, this.state);
    
        this.props.emailSignInStart(user);
       
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }
    render(){
        const {username, email, password} = this.state
        console.log('sign in')
        return(
            <div className='sign-in'>
                <h1>SIGNIN PAGE</h1>
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='username'
                    type='username'
                    handleChange={this.handleChange}
                    value={username}
                    label='username'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                />
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    {/* <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> 
                    {' '}
                    Sign in with Google{' '} </CustomButton> */}
                </div>
            </form>
        </div>

        )
    }
    
}
const mdtp = dispatch => ({
    emailSignInStart: (user) => dispatch(emailSignInStart(user))
    // googleSignInStart: ()=> dispatch(googleSignInStart()),
    // emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
})
export default connect(null, mdtp)(SignIn)

