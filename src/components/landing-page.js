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
            <div className="aboutContainer">
            <span> The Book Nook is a place to share and explore your favorite works of literature!</span><br />
            <span> With the Book Nook you can keep track of your favorite books and authors
                   and let others know what you are currently reading!</span><br />
            <span>Demo Username: demo</span>
            <span>Demo Password: qwertyuiop</span>
            </div>  
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
