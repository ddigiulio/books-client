import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import Book from './book'
import { Link } from 'react-router-dom'
import './profile.css'
import HeaderBar from './header-bar'

export class Profile extends React.Component {
 
    componentDidMount() {
        this.props.dispatch(actions.getCurrentlyReading());
        this.props.dispatch(actions.getTopBooks());
    }


    render() {

        const topBooks = this.props.topBooks.map((book, index) =>
            <Link  key={index} to={"/Book/" + book._id}> <Book {...book} param={{type:"top"}}/></Link>);
        return (
            <div className="profile">
                <HeaderBar/>
                <div className="currentBookContainer">
                    <div className="currentBookTitle">Currently Reading</div>
                    <div className="currentBook">
                    <Link  to={"/currentBook/" + this.props.currentlyReading.id}><Book 
                        imageSrc={this.props.currentlyReading.imageSrc}
                        author={this.props.currentlyReading.author}
                        title={this.props.currentlyReading.title} /></Link>
                    </div>
                    <div className="updateCurrentBookContainer">
                        <Link to="/currentBookPageUpdate"><button className="updateCurrentButton">Update</button></Link>
                    </div>
                </div>
                <div className="topBooksContainer">
                <div className="topBooksTitle">Top Books</div>
                    <div className="topBooks">
                        {topBooks}
                    </div>
                    <div className="updateTopBooksContainer">
                    <Link to="/topBooksPage"><button>Update</button></Link>
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
        currentlyReading: state.profile.currentlyReading,
        topBooks: state.profile.topBooks

    };
};

export default requiresLogin()(connect(mapStateToProps)(Profile));
