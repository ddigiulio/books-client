import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import Book from './book'
import { Link } from 'react-router-dom'
import './Profile.css'

export class Profile extends React.Component {
 
    componentDidMount() {
        this.props.dispatch(actions.getCurrentlyReading());
        this.props.dispatch(actions.getTopBooks());
    }


    render() {
        const topBooks = this.props.topBooks.map((book, index) =>
            <Link  key={index} to={"/Book/" + book._id}> <Book {...book} /></Link>);
        return (
            <div className="profile">
                <div className="profile-username">
                    Username: {this.props.username}
                </div>
                <div className="profile-name">Name: {this.props.name}</div>
                <div className="currentlyReading">
                    <button><Link to="/currentBookPageUpdate">Update Currently Reading</Link></button>
                    <Book
                        imageSrc={this.props.currentlyReading.imageSrc}
                        author={this.props.currentlyReading.author}
                        title={this.props.currentlyReading.title} />
                </div>
                <div className="topBooksContainer">
                    <button><Link to="/topBooksPage">Update Top Books</Link></button>
                    <div className="topBooks">
                        {topBooks}
                    </div>
                </div>
            </div>
        );
    }
}
Profile.defaultProps = {
    text: ''
};

//ask about this return statement
const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        currentlyReading: state.profile.currentlyReading,
        topBooks: state.profile.topBooks

    };
};

export default requiresLogin()(connect(mapStateToProps)(Profile));
