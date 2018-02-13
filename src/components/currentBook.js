import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Book from './book'
import { Link } from 'react-router-dom'
import './profile.css'
import './currentBook.css'

export class currentBook extends React.Component {

  render() {
    let currentlyReading;
    if (!this.props.currentlyReading.title) {
      currentlyReading = (<div className="noCurrent">You haven't added which book you are currently reading yet!
       Click the update button below to add a book!</div>)
    }
    else {
      currentlyReading = <div className="currentBook">
        <Link to={"/currentBook/" + this.props.currentlyReading.id}>
          <Book
            imageSrc={this.props.currentlyReading.imageSrc} />
        </Link>
 
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
    currentlyReading: state.profile.currentlyReading,
  };
};

export default requiresLogin()(connect(mapStateToProps)(currentBook));