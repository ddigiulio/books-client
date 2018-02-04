import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import Author from './Author'
import { Link } from 'react-router-dom'
import './profile.css'
import HeaderBar from './header-bar'
import './personProfile.css'
export class personProfile extends React.Component {


    render() {
        //this has to change to personprofilebook
        const topBooks = this.props.topBooks.map((book, index) =>
            <Link key={index} to={"/personBookPage/" + book._id}> <Book {...book} /></Link>);
        const topAuthors = this.props.topAuthors.map((author, index) =>
            <Link key={index} to={"/personAuthor/" + author._id}> <Author imageSrc={author.smallImageSrc} /></Link>);
        return (
            <div className="profile">
                <HeaderBar />
                <div className="personUsername">
                    <span className="usernameSpan">{this.props.username}</span>
                </div>
                <div className="currentBookContainer">
                    <div className="currentBookTitle">Currently Reading</div>
                    <div className="currentlyReading">
                        <Link to={"/currentBookPerson/" + this.props.currentlyReading._id}><Book
                            imageSrc={this.props.currentlyReading.imageSrc}
                            author={this.props.currentlyReading.author}
                            title={this.props.currentlyReading.title} /></Link>
                    </div>
                </div>
                <div className="topBooksContainer">
                    <div className="topBooksTitle">Top Books</div>
                    <div className="topBooks">
                        {topBooks}
                    </div>
                </div>
                <div className="topAuthorsContainer">
                    <div className="topAuthorsTitle">Top Authors</div>
                    <div className="topAuthors">
                        {topAuthors}
                    </div>
                </div>
            </div>
        );
    }
}
personProfile.defaultProps = {
    text: ''
};

//ask about this return statement
const mapStateToProps = state => {

    return {
        username: state.search.searchResult.username,
        currentlyReading: state.search.searchResult.currentlyReading,
        topBooks: state.search.searchResult.topBooks,
        topAuthors: state.search.searchResult.topAuthors
    };
};
export default requiresLogin()(connect(mapStateToProps)(personProfile));
