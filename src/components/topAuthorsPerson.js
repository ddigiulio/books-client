import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Author from './Author'
import { Link } from 'react-router-dom'
import './profile.css'


export class TopAuthorsPerson extends React.Component {

  render() {
    let topAuthors;
    if (this.props.topAuthors.length === 0) {
      topAuthors = (<div className="noTopAuthors">{this.props.username} saved any authors yet.
       </div>)
  }
  else {
      topAuthors = this.props.topAuthors.map((author, index) =>
          <div className="topAuthorWrapper">
              <Link key={index} to={"/personAuthor/" + author._id}>
               <Author imageSrc={author.imageSrc} />
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
    username: state.search.searchResult.username,
    topAuthors: state.search.searchResult.topAuthors
  };
};

export default requiresLogin()(connect(mapStateToProps)(TopAuthorsPerson));