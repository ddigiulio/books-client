import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Author from './Author'
import * as actions from '../actions/profile';
import './profile.css'
import './searchResultTopAuthor.css'

export class searchResultTopAuthor extends React.Component {

  addAuthor = () => {

    this.props.dispatch(actions.addTopAuthorThunk(this.props.id, this.props.history))
}

  render() {
    return (
      <div className="searchResultTopAuthor">
        <div className="topAuthorWrapper_">
        <Author imageSrc={this.props.imageSrc} />
        </div>
        <div className="infoTopAuthorSearch">
          <span className="authorSpan"> {this.props.author}</span><br />
        </div>
        <div>
        <button className="addAuthorSearchButton" onClick={this.addAuthor}>Add Author</button>
        </div>
      </div>
    );
  }
}



export default requiresLogin()(connect()(searchResultTopAuthor));