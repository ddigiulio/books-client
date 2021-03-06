import React from 'react';
import { connect } from 'react-redux';
import HeaderBar from './header-bar'
import * as actions from '../actions/search';
import './searchPage.css'
import { Link } from 'react-router-dom'
import image from '../books2.jpg'


export class searchPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.clearSearch())
        
    }
    searchUser = (event) => {
        event.preventDefault();
        var param = event.target.username.value;
        this.props.dispatch(actions.searchThunk(param))
    }

    render() {
        let result, title, help;
        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        if(!this.props.searchResult){
            help = (<div className="helpSearchPage">
            <span>Search is by exact username only.</span><br />
            <span> Search for: demo1 </span>
            </div>)
        }
        else{
           result = (<Link to="/personProfile" style={{ textDecoration: 'none' }}>
                <div className="searchResultContainer">
                <span className="searchSpan"> Name: </span><br />
                <span className="searchSpan"> {this.props.searchResult.firstname} </span>
                <span className="searchSpan">{this.props.searchResult.lastname}</span><br />
                <span className="searchSpan"> Username: </span><br />
                <span className="searchSpan"> {this.props.searchResult.username}</span><br />
                <button className="searchProfileButton"> Go to Profile </button>
                </div></Link>)
                
            title = <div className="searchResultsTitle">Search Results</div>;
            help=""
        }
        return (
            <div style={sectionStyle} className="searchPage">
                <HeaderBar />
                {help}
                <div className="searchWrapper">
                <form onSubmit={this.searchUser}>
                    <label className="searchLabel">
                        Search by user name
                        </label>
          <input type="text" name="username" /> 
                    <input type="submit" value="Submit" />
                </form>  
                </div>
                {title}
                <div className="searchResults">
                {result}
                </div>   
                     
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchResult: state.search.searchResult
});
export default connect(mapStateToProps)(searchPage)