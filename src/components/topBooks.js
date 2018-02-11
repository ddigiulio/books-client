import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import { Link } from 'react-router-dom'
import './profile.css'

export class TopBooks extends React.Component {

  render() {
    let topBooks;
    if (this.props.topBooks.length === 0) {
      topBooks = (<div className="noTopBooks">You haven't saved any books yet.
       Click the update button below to add your favorite books!</div>)
    }
    else {
      topBooks = this.props.topBooks.map((book, index) =>
        <div className="topBookWrapper">
          <Link to={"/Book/" + book._id}>
            <Book key={index}{...book} /></Link>
          <span className="spanTitle">{book.title}</span>
        </div>);
    }

      return(
        topBooks
      )
  }
}

const mapStateToProps = state => {

  return {
    topBooks: state.profile.topBooks,
  };
};

export default requiresLogin()(connect(mapStateToProps)(TopBooks));