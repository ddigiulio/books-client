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
        <div className="home">
            <div style={sectionStyle} className="top">
            <h1>The Book Nook</h1>
            {/* <div className="p-div">
            <p> Share and explore your favorite works of literature!</p><br />
            </div> */}
            </div>
            
             <div className="aboutContainer">
            
            <span> Do you love to read and want others to know what you are reading?</span><br />
            <span> The Book Nook lets you share and explore your favorite works of literature!</span><br />
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
