import React from 'react';
import { connect } from 'react-redux';
import HeaderBar from './header-bar'
import * as actions from '../actions/search';
import { Link } from 'react-router-dom'

export class searchPage extends React.Component {

    searchUser = (event) => {
        event.preventDefault();
        var param = event.target.username.value;
        this.props.dispatch(actions.searchThunk(param))
    }

    render() {
        let result;
        if(!this.props.searchResult){
            result = <span>User not found!</span>
        }
        else{
           result = (<Link to="/personProfile"><span>{this.props.searchResult.username}</span><br />
                <span>{this.props.searchResult.firstname}</span><br />
                <span>{this.props.searchResult.lastname}</span><br /></Link>)
        }
        return (
            <div>
                <HeaderBar />
                <form onSubmit={this.searchUser}>
                    <label>
                        Search by user name:
          <input type="text" name="username" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>  
                <div className="searchResult">
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