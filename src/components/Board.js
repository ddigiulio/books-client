import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Book from './Book'
import Author from './Author'
import Profile from './Profile'
import './Board.css';

export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.changeCurrentlyReading = this.changeCurrentlyReading.bind(this);
        // this.addTopBook = this.addTopBook.bind(this);

    }

    changeCurrentlyReading = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.currentBookThunk(param))
    }

    addTopBook = (event) => {
        event.preventDefault();
        var param = event.target.topBookTitle.value;
        this.props.dispatch(actions.topBookThunk(param))
    }

     addTopAuthor = (event) => {
        event.preventDefault();
        var param = event.target.topAuthorTitle.value; 
        this.props.dispatch(actions.topAuthorThunk(param))
    }





    render() {
        const topBooks = this.props.topBooks.map((book, index) =>
            <Book key={index} {...book} />
        );

        const topAuthors = this.props.topAuthors.map((author, index) =>
            <Author key={index} {...author} />
        );


        return (
            <div className="board">
                <div className="profile">
                    <Profile name="Danny Di Giulio" />
                </div>
                <div className="currentlyReading">
                    <form onSubmit={this.changeCurrentlyReading}>
                        <label>
                            Update Currently Reading:
          <input type="text" name="bookTitle" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <Book
                        imageSrc={this.props.currentlyReading.imageSrc}
                        author={this.props.currentlyReading.author}
                        title={this.props.currentlyReading.title} />
                </div>
                <h3 className="favoriteHeader"> Favorite Books </h3>
                <form onSubmit={this.addTopBook}>
                    <label>
                        Update Top Books:
          <input type="text" name="topBookTitle" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="topBooks">
                    {topBooks}
                </div>
            <form onSubmit={this.addTopAuthor}>
                    <label>
                        Update Top Authors:
          <input type="text" name="topAuthorTitle" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <div className="topAuthors">
            {topAuthors}
        </div>
            </div>
        )
    };

}

Board.defaultProps = {
    title: 'Board'
};

const mapStateToProps = state => ({
    currentlyReading: state.currentlyReading,
    topBooks: state.topBooks,
    topAuthors: state.topAuthors
});


export default connect(mapStateToProps)(Board);