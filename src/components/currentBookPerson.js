import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import { Link } from 'react-router-dom'
import './profile.css'
import './currentBook.css'

export class currentBookPerson extends React.Component {

  render() {
    let currentlyReading;
    if (!this.props.currentlyReading) {
      currentlyReading = (<div className="noCurrent">{this.props.username} hasn't added which book they are currently reading yet!
       </div>)
    }
    else {
      currentlyReading = <div className="currentBook">
        <Link to={"/currentBookPerson/" + this.props.currentlyReading._id}><Book
          imageSrc={this.props.currentlyReading.imageSrc}
          author={this.props.currentlyReading.author}
          title={this.props.currentlyReading.title} /></Link>

        <span className="spanTitle">{this.props.currentlyReading.title}</span>
      </div>
    }
    return (
      currentlyReading
    )
  }
}

const mapStateToProps = state => {

  return {
    username: state.search.searchResult.username,
    currentlyReading: state.search.searchResult.currentlyReading,
  };
};

export default requiresLogin()(connect(mapStateToProps)(currentBookPerson));