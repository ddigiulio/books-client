import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './registration-page.css'
import RegistrationForm from './registration-form';
import image from '../books2.jpg'

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/profile" />;
    }
    const sectionStyle = {
        backgroundImage: `url(${image})`
    }
    return (
        <div style={sectionStyle} className="homeone">
            <h2>The Book Nook</h2>
            <h3>Register</h3>
            <RegistrationForm />
            <Link to="/">Back to login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
