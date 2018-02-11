import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import { Link } from 'react-router-dom'
import * as actions from '../actions/profile';
import './profile.css'

export class searchResultCurrent extends React.Component {

  addBook = () => {
    console.log(this.props.history)
    this.props.dispatch(actions.addCurrentBookThunk(this.props.id, this.props.history))
}

  render() {
    return (
      <div>
        <Book imageSrc={this.props.imageSrc} />
        <div className="infoCurrentSearch">
        <span> {this.props.title}</span><br />
        <span>by {this.props.author}</span>
        </div>
        <button className="addBook buttonsCurrent" onClick={this.addBook}>Add Book</button>
      </div>
    );
  }
}



export default requiresLogin()(connect()(searchResultCurrent));