import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import { Link } from 'react-router-dom'
import './profile.css'

export class TopBooksPerson extends React.Component {

  render() {
    let topBooks;
    if (this.props.topBooks.length === 0) {
      topBooks = (<div className="noTopBooks">{this.props.username} hasn't saved any books yet.
      </div>)
    }
    else {
      topBooks = this.props.topBooks.map((book, index) =>
        <div className="topBookWrapper">
          <Link key={index} to={"/personBookPage/" + book._id}> 
          <Book {...book} />
          </Link>
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
    username: state.search.searchResult.username,
    topBooks: state.search.searchResult.topBooks,
  };
};

export default requiresLogin()(connect(mapStateToProps)(TopBooksPerson));