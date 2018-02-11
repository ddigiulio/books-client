import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Author from './Author'
import { Link } from 'react-router-dom'
import './profile.css'


export class TopAuthors extends React.Component {

  render() {
    let topAuthors;
    if (this.props.topAuthors.length === 0) {
      topAuthors = (<div className="noTopAuthors">You haven't saved any authors yet.
       Click the update button to add authors!</div>)
  }
  else {
      topAuthors = this.props.topAuthors.map((author, index) =>
          <div className="topAuthorWrapper">
              <Link to={"/Author/" + author._id}>
                  <Author key={index} imageSrc={author.smallImageSrc} />
              </Link>
              <span className="spanTitle">{author.name}</span>
          </div>);
  }
      return(
        topAuthors
      )
  }
}

const mapStateToProps = state => {

  return {
    topAuthors: state.profile.topAuthors,
  };
};

export default requiresLogin()(connect(mapStateToProps)(TopAuthors));