import React from 'react';
import { connect } from 'react-redux';
import HeaderBar from './header-bar'
import * as actions from '../actions/search';
import './searchPage.css'
import { Link } from 'react-router-dom'

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
        let result;
        if(!this.props.searchResult){
            
        }
        else{
           result = (<Link to="/personProfile" style={{ textDecoration: 'none' }}>
                <div className="searchResultContainer">
                <span> {this.props.searchResult.firstname} </span>
                <span>{this.props.searchResult.lastname}</span><br />
                <span> {this.props.searchResult.username}</span><br /></div></Link>)
        }
        return (
            <div>
                <HeaderBar />
                <div className="helpPage">
                <span>Search is by exact username only.</span><br />
                <span> Search for: demo1 </span>
                </div>
                <div className="searchWrapper">
                <form onSubmit={this.searchUser}>
                    <label className="searchLabel">
                        Search by user name
                        </label>
          <input type="text" name="username" /> 
                    <input type="submit" value="Submit" />
                </form>  
                </div>
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