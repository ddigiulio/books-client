import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import Book from './book'
import { Link } from 'react-router-dom'
import './profile.css'
import HeaderBar from './header-bar'
import TopBooks from './topBooks'
import TopAuthors from './topAuthors'
import image from '../books2.jpg'

export class profile extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.clearSearch())
        this.props.dispatch(actions.getCurrentlyReading());
        this.props.dispatch(actions.getTopBooks());
        this.props.dispatch(actions.getTopAuthors());

    }

    render() {
        const sectionStyle = {
            backgroundImage: `url(${image})`
        }

        return (
            <div style={sectionStyle} className="profile">
                <HeaderBar />
                <div className="currentBookContainer">
                    <div className="currentBookWrapper">
                        <div className="currentBookTitle">Currently Reading</div>
                        <div className="currentBook">
                            <Link to={"/currentBook/" + this.props.currentlyReading.id}><Book
                                imageSrc={this.props.currentlyReading.imageSrc}
                            /></Link>
                            <span className="spanTitle">{this.props.currentlyReading.title}</span>
                        </div>
                        <div className="updateCurrentBookContainer">
                            <Link to="/currentBookPageUpdate"><button className="updateCurrentButton">Update</button></Link>
                        </div>
                    </div>
                </div>
                <div className="topBooksContainer">
                    <div className="topBooksTitle">Top Books</div>
                    <div className="topBooks">
                        <TopBooks />
                    </div>
                    <div className="updateTopBooksContainer">
                        <Link to="/updateTopBooksPage"><button className="updateTopBooksButton">Update</button></Link>
                    </div>
                </div>
                <div className="topAuthorsContainer">
                    <div className="topAuthorsTitle">Top Authors</div>
                    <div className="topAuthors">
                        <TopAuthors />
                    </div>
                    <div className="updateTopAuthorsContainer">
                        <Link to="/updateTopAuthorsPage"><button className="updateTopAuthorsButton">Update</button></Link>
                    </div>
                </div>
            </div>

        );
    }
}
profile.defaultProps = {
    text: ''
};

//ask about this return statement
const mapStateToProps = state => {

    return {
        currentlyReading: state.profile.currentlyReading,
        topBooks: state.profile.topBooks,
        topAuthors: state.profile.topAuthors
    };
};

export default requiresLogin()(connect(mapStateToProps)(profile));
