import React, { Component } from "react";
import * as Components from './Components';
import '../Login/Login.css';
import RestApi from '../../AppUrl/RestApi';
import AppUrl from '../../AppUrl/AppUrl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: true,
            passwordError: '',
        };
    }

    toggleSignIn = (signIn) => {
        this.setState({ signIn });
    };

    validatePassword = (password) => {
        if (password.length < 8) {
            this.setState({ passwordError: 'Password must be at least 8 characters long.' });
            return false;
        }
        this.setState({ passwordError: '' });
        return true;
    };

    handleSubmitSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (this.validatePassword(password)) {
            let postData = new URLSearchParams();
            postData.append('name', name);
            postData.append('email', email);
            postData.append('password', password);

            RestApi.PostRequest(AppUrl.SignUp, postData)
            .then(result => {
                alert('Inscription réussie');
            })
            .catch(error => {
                if (error.response) {
                    alert('Erreur : ' + (error.response.data.message || 'Une erreur inconnue est survenue'));
                } else {
                    alert('Erreur réseau ou serveur non disponible.');
                }
            });
        }
    };

    handleSubmitSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        let postData = new URLSearchParams();
        postData.append('email', email);
        postData.append('password', password);

        RestApi.PostRequest(AppUrl.SignIn, postData)
        .then(result => {
            alert('Connexion réussie');
        })
        .catch(error => {
            if (error.response) {
                alert('Erreur : ' + (error.response.data.message || 'Une erreur inconnue est survenue'));
            } else {
                alert('Erreur réseau ou serveur non disponible.');
            }
        });
    };

    render() {
        const { signIn, passwordError } = this.state;

        return (
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={this.handleSubmitSignUp}>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' name='name' placeholder='Name' required />
                        <Components.Input type='email' name='email' placeholder='Email' required />
                        <Components.Input 
                            type='password' 
                            name='password' 
                            placeholder='Password' 
                            required 
                            onChange={(e) => this.validatePassword(e.target.value)} 
                        />
                        {passwordError && <span className="error">{passwordError}</span>}
                        <Components.Button type="submit">Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={this.handleSubmitSignIn}>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' name='email' placeholder='Email' required />
                        <Components.Input type='password' name='password' placeholder='Password' required />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button type="submit">Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => this.toggleSignIn(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter your personal details and start the journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => this.toggleSignIn(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        );
    }
}

export default Login;
