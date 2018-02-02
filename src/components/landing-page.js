import React from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import image from '../books.jpg'
import './landing-page.css'

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/profile" />;
    }
    const sectionStyle = {
        backgroundImage: `url(${image})`
    }
    return (
        <div style={sectionStyle} className="home">
            <h1>The Book Nook</h1>
            <LoginForm />  
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
