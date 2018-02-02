import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import { Link } from 'react-router-dom'
import './profile.css'
import HeaderBar from './header-bar'

export class personProfile extends React.Component {
 

    render() {
        //this has to change to personprofilebook
        const topBooks = this.props.topBooks.map((book, index) =>
            <Link  key={index} to={"/Book/" + book._id}> <Book {...book} /></Link>);
        return (
            <div className="profile">
                <HeaderBar/>
                <span>{this.props.username}</span>
                <div className="currentlyReading">
                    
                    <Book
                        imageSrc={this.props.currentlyReading.imageSrc}
                        author={this.props.currentlyReading.author}
                        title={this.props.currentlyReading.title} />
                </div>
                <div className="topBooksContainer">
                    
                    <div className="topBooks">
                    {topBooks}
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
        topBooks: state.search.searchResult.topBooks
    };
};
export default requiresLogin()(connect(mapStateToProps)(personProfile));