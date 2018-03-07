import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header-bar.css'
import { Link } from 'react-router-dom'
import requiresLogin from './requires-login';


export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logOut"onClick={() => this.logOut()}>Log out</button>
            );
        }

        return (
            <div  className="header-bar">
                <h1>The Book Nook</h1>
                
                <div className="secondary">
                
                <Link to="/profile"><button className="profileButton">{this.props.currentUser.firstName || this.props.currentUser.username}</button></Link>
                <Link to="/searchPage"><button className="search">User search</button></Link>
                {logOutButton}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default requiresLogin()(connect(mapStateToProps)(HeaderBar));
