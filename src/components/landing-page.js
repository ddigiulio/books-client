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
        backgroundImage: `url(${image})`,
        
    }
    return (
        <div style={sectionStyle} className="home">
            <div  className="top">
            <h1>The Book Nook</h1>
            </div>
            <div className="all-container">
             <div className="aboutContainer">
            <span> Do you <span className="blue">love</span> to read and want others to know what you are reading?</span><br />
            <span> The <span className="blue"> Book Nook</span> lets you share and explore your <span className="blue">favorite</span> works of literature!</span><br />
            <span>Demo Username: demo</span>
            <span>Demo Password: qwertyuiop</span>
            </div>  
            <LoginForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
