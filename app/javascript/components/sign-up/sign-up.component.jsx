import React, { useState } from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import {signup} from '../../redux/session/session.actions'
// import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss';

class SignUp extends React.Component {
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
    
        this.props.signup(user);
       
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render(){
        const {username, email, password} = this.state
        console.log('sign up')
        return(
            <div className='sign-up'>
                <h1>SIGNUP PAGE</h1>
                <h2 className='title'>
                I do not have an account
                </h2>
                <span> Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='username'
                    value={username}
                    onChange={this.handleChange}
                    label='username'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                />
                {/* <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                /> */}
                <CustomButton type='submit'> SIGN UP </CustomButton>
            </form>
        </div>

        )
    }
    
}
const mdtp = dispatch => ({
    signup: (user) => dispatch(signup(user))
    // googleSignInStart: ()=> dispatch(googleSignInStart()),
    // emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
})
export default connect(null, mdtp)(SignUp)

