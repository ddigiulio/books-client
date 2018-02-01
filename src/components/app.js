import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import currentBookPageUpdate from './currentBookPageUpdate';
import LandingPage from './landing-page';
import searchPage from './searchPage'
import Profile from './profile';
import personProfile from './personProfile'
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import bookPage from './bookPage'
import currentBookPage from './currentBookPage'
import topBooksPageUpdate from './topBooksPageUpdate'
import topAuthorsPageUpdate from './topAuthorsPageUpdate'
import searchCurrentBook from './searchCurrentBook'
import searchTopBook from './searchTopBook'
import './app.css'

export class App extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }


    render() {
        return (
            <div className="app">        
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/currentBookPageUpdate" component={currentBookPageUpdate} />
                <Route exact path="/updateTopBooksPage" component={topBooksPageUpdate} />
                <Route exact path="/updateTopAuthorsPage" component={topAuthorsPageUpdate} />
                <Route path="/Book/:id" component={bookPage} />
                <Route path="/searchCurrentBook/:id" component={searchCurrentBook}/>
                <Route path="/searchTopBook/:id" component={searchTopBook}/>
                <Route path="/currentBook/:id" component={currentBookPage} />
                <Route exact path="/searchPage" component={searchPage} />
                <Route exact path="/personProfile" component={personProfile}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
