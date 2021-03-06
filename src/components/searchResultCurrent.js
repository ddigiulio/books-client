import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import * as actions from '../actions/profile';
import './profile.css'
import './searchResultCurrent.css'

export class searchResultCurrent extends React.Component {

  addBook = () => {

    this.props.dispatch(actions.addCurrentBookThunk(this.props.id, this.props.history))
}

  render() {
    return (
      <div className="searchResultCurrent">
      <div className="currentBookWrapper_">
        <Book imageSrc={this.props.imageSrc} />
        </div>
        <div className="infoCurrentSearch">
          <span> {this.props.title}</span><br />
          <span>by {this.props.author}</span>
        </div>
        <div>
        <button className="addCurrentSearchButton" onClick={this.addBook}>Add Book</button>
        </div>
      </div>
    );
  }
}

export default requiresLogin()(connect()(searchResultCurrent));