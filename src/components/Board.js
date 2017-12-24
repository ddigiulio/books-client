import React from 'react';
import profPic from '../profpic.png'
import Book from './Book'
import Author from './Author'
import Profile from './Profile'
import './Board.css';

export default function Board() {
    var books_ = [
        {
            title: "Siddhartha",
            imageSrc: "https://images.gr-assets.com/books/1428715580m/52036.jpg",
            author: "Herman Hesse"
        },
        {
            title: "East of Eden",
            imageSrc: "https://images.gr-assets.com/books/1441547516m/4406.jpg",
            author: "John Steinbeck"
        },
        {
            title: "Return of the King",
            imageSrc: "https://images.gr-assets.com/books/1389977161m/18512.jpg",
            author: "J.R.R. Tolkien"
        },
        {
            title: "The Bell Jar",
            imageSrc: "https://images.gr-assets.com/books/1473890514m/6514.jpg",
            author: "Sylvia Plath"
        },
        {
            title: "The Stranger",
            imageSrc: "https://images.gr-assets.com/books/1349927872m/49552.jpg",
            author: "Albert Camus"
        },
        {
            title: "Catch-22",
            imageSrc: "https://images.gr-assets.com/books/1463157317m/168668.jpg",
            author: "Joseph Heller"
        },
        {
            title: "Prince Caspian",
            imageSrc: "https://images.gr-assets.com/books/1308814880m/121749.jpg",
            author: "C.S. Lewis"
        },
        {
            title: "Satanic Verses",
            imageSrc: "https://images.gr-assets.com/books/1281988101m/12781.jpg",
            author: "Salman Rushdie"
        },
        {
            title: "Infinite Jest",
            imageSrc: "https://images.gr-assets.com/books/1446876799m/6759.jpg",
            author: "David Foster Wallace"
        },
        {
            title: "Harry Potter and the Deathly Hallows",
            imageSrc: "https://images.gr-assets.com/books/1474171184m/136251.jpg",
            author: "J.K. Rowling"
        }
     ];


//create a list of books from array 
//later -> these will come from store 
const topBooks = books_.map((book, index) =>
    <Book key={index} {...book} />
);

const authors_ = [ {
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
        }];

const topAuthors = authors_.map((author, index) =>
    <Author key={index} {...author} />
);


return (
    <div className="board">
        <div className="profile">
            <Profile name="Danny Di Giulio" imageSrc={profPic} />
        </div>
        <div className="currentlyReading">
            {/*<h3> Currently Reading </h3>*/}
            <Book
                imageSrc="https://images.gr-assets.com/books/1428715580m/52036.jpg"
                author="Herman Hesse"
                title="Siddhartha" />
        </div>
        {/*<h3 className="favoriteHeader"> Favorite Books </h3>*/}
        <div className="topBooks">
            {topBooks}
        </div>
        <div className="topAuthors">
            {topAuthors}
        </div>
    </div>
);

}

Board.defaultProps = {
    title: 'Board'
};
