import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import HeaderBar from './header-bar'
import Book from './book'
import { Link } from 'react-router-dom'
import "./currentBookPageUpdate.css"
export class currentBookPageUpdate extends React.Component {


    changeCurrentlyReading = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.currentBookThunk(param, this.props.history))

    }

    render() {
        let result;
        if (!this.props.searchResults) {
            result = null;
 
        }
        else {
            result = this.props.searchResults.map((book, index) =>
                <Link key={index} to={"/searchCurrentBook/" + book.bookID}> <Book {...book} /></Link>);
            
        }
        return (
            <div>
                <HeaderBar />
                <div className="currentFormWrapper">
                    <form onSubmit={this.changeCurrentlyReading}>
                        <label className="searchLabel">
                             Search for new book 
                        </label><br />
          <input type="text" name="bookTitle" /><br />        
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
    searchResults: state.profile.searchResults,
})

export default requiresLogin()(connect(mapStateToProps)(currentBookPageUpdate));