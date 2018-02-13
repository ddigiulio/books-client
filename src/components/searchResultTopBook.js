import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import * as actions from '../actions/profile';
import './profile.css'
import './searchResultTopBook.css'

export class searchResultTopBook extends React.Component {

  addBook = () => {

    this.props.dispatch(actions.addTopBookThunk(this.props.id, this.props.history))
}

  render() {
    return (
      <div className="searchResultTopBook">
        <div className="topBookWrapper_">
        <Book imageSrc={this.props.imageSrc} />
        </div>
        <div className="infoTopBookSearch">
          <span> {this.props.title}</span><br />
          <span>by {this.props.author}</span>
        </div>
        <div>
        <button className="addBookSearchButton" onClick={this.addBook}>Add Book</button>
        </div>
      </div>
    );
  }
}



export default requiresLogin()(connect()(searchResultTopBook));