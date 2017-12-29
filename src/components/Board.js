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


        this.state = {
            authors: [{
                imageSrc: "https://images.gr-assets.com/authors/1182118389p5/585.jpg",
                author: "John Steinbeck"
            },
            {
                imageSrc: "https://images.gr-assets.com/authors/1434625177p5/656983.jpg",
                author: "J.R.R. Tolkien"
            },
            {
                imageSrc: "https://images.gr-assets.com/authors/1367519078p5/1069006.jpg",
                author: "C.S. Lewis"
            },
            {
                imageSrc: "https://images.gr-assets.com/authors/1510435123p5/1077326.jpg",
                author: "J.K. Rowling"
            },
            {
                imageSrc: "https://images.gr-assets.com/authors/1406040005p5/1455.jpg",
                author: "Ernest Hemingway"
            },
            {
                imageSrc: "https://images.gr-assets.com/authors/1393683411p5/5754446.jpg",
                author: "Voltaire"
            },
            {
                imageSrc: "https://images.gr-assets.com/authors/1506091612p5/957894.jpg",
                author: "Camus"
            },
            {
                imageSrc: "https://images.gr-assets.com/authors/1433582280p5/2778055.jpg",
                author: "Vonnegut"
            }]
        }
    }

    changeCurrentlyReading = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;

        this.props.dispatch(actions.currentBookThunk(param))
    }

    addTopBook = (event) => {
        event.preventDefault();
        var param = event.target.topBookTitle.value;
        console.log(param)
        this.props.dispatch(actions.topBookThunk(param))
    }

     addTopAuthor = (event) => {
        event.preventDefault();
        var param = event.target.topAuthorTitle.value;
        console.log(param)
        this.props.dispatch(actions.topAuthorThunk(param))
    }





    render() {
        const topBooks = this.props.topBooks.map((book, index) =>
            <Book key={index} {...book} />
        );

        // const topAuthors = this.state.authors.map((author, index) =>
        //     <Author key={index} {...author} />
        // );


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

                {/*<div className="topAuthors">
            {topAuthors}
        </div>*/}
            </div>
        )
    };

}

Board.defaultProps = {
    title: 'Board'
};

const mapStateToProps = state => ({
    currentlyReading: state.currentlyReading,
    topBooks: state.topBooks
});


export default connect(mapStateToProps)(Board);