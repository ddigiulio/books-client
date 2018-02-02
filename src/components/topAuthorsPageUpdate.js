import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import HeaderBar from './header-bar'
import { Link } from 'react-router-dom'
import Author from './Author'
import './topAuthorsPageUpdate.css'

export class topAuthorsPageUpdate extends React.Component {

    addTopAuthor = (event) => {
        event.preventDefault();
        var param = event.target.topAuthorTitle.value;
        this.props.dispatch(actions.topAuthorThunk(param, this.props.history))
    }
    render() {
        let result;
        if (!this.props.searchResults) {
            result = null;
        }
        else {
            result = this.props.searchResults.map((author, index) =>
                <Link key={index} to={"/searchTopAuthor/" + author.id}> <Author {...author} /></Link>);

        }
        return (
            <div>
                <HeaderBar />
                <div className="topAuthorsWrapper">
                <form onSubmit={this.addTopAuthor}>
                    <label className="searchLabel">
                        Add Top Author
                        </label>
          <input type="text" name="topAuthorTitle" />
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


const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
    searchResults: state.profile.searchResults
})

export default requiresLogin()(connect(mapStateToProps)(topAuthorsPageUpdate));