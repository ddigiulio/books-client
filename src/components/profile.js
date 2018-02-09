import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import Book from './book'
import Author from './Author'
import { Link } from 'react-router-dom'
import './profile.css'
import HeaderBar from './header-bar'
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
        const topBooks = this.props.topBooks.map((book, index) =>
            <div className="topBookWrapper">
            <Link  key={index} to={"/Book/" + book._id}> 
            <Book {...book} /></Link>
            <span>{book.title}</span>
            </div>);
        const topAuthors = this.props.topAuthors.map((author, index) =>
        <div className="topAuthorWrapper">
        <Link  key={index} to={"/Author/" + author._id}>
        <Author imageSrc={author.smallImageSrc} />
        </Link>
        <span>{author.name}</span>
        </div>);
        return (
            <div style={sectionStyle} className="profile">
                <HeaderBar/>
                <div className="currentBookContainer">
                <div className="currentBookWrapper">
                    <div className="currentBookTitle">Currently Reading</div>
                    <div className="currentBook">
                    <Link  to={"/currentBook/" + this.props.currentlyReading.id}><Book 
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
                        {topBooks}
                    </div>
                    <div className="updateTopBooksContainer">
                    <Link to="/updateTopBooksPage"><button className="updateTopBooksButton">Update</button></Link>
                    </div>
                </div>
                <div className="topAuthorsContainer">
                <div className="topAuthorsTitle">Top Authors</div>
                <div className="topAuthors">
                        {topAuthors}
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
