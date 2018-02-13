import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './profile.css'
import HeaderBar from './header-bar'
import './personProfile.css'
import TopBooksPerson from './topBooksPerson'
import TopAuthorsPerson from './topAuthorsPerson'
import CurrentBookPerson from './currentBookPerson.js'
import image from '../books2.jpg'

export class personProfile extends React.Component {


    render() {
        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
 
        return (
            <div style={sectionStyle} className="profile">
                <HeaderBar />
                <div className="personUsername">
                    <span className="usernameSpan">{this.props.username}</span>
                </div>
                <div className="currentBookContainer">
                    <div className="currentBookWrapper">
                    <div className="currentBookTitle">Currently Reading</div>
                    <div className="currentlyReading">
                        <CurrentBookPerson />
                    </div>
                    </div>
                </div>
                <div className="topBooksContainer">
                    <div className="topBooksTitle">Top Books</div>
                    <div className="topBooks">
                        <TopBooksPerson />
                    </div>
                </div>
                <div className="topAuthorsContainer">
                    <div className="topAuthorsTitle">Top Authors</div>
                    <div className="topAuthors">
                        <TopAuthorsPerson />
                    </div>
                </div>
            </div>
        );
    }
}
personProfile.defaultProps = {
    text: ''
};

const mapStateToProps = state => {

    return {
      username: state.search.searchResult.username,
    };
  };
//ask about this return statement

export default requiresLogin()(connect(mapStateToProps)(personProfile));
