import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import Book from './book'
import { Link } from 'react-router-dom'
import './topBooksPageUpdate.css'
import HeaderBar from './header-bar'

export class topBooksPageUpdate extends React.Component {
    
    changeTopBooks = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.topBooksThunk(param, this.props.history))
       
    }

    render() {

        let result;
        if(!this.props.searchResults){
            result=null;
        }
        else{
             result = this.props.searchResults.map((book, index) =>
            <Link  key={index} to={"/searchTopBook/" + book.bookID}> <Book {...book}/></Link>);
            
        }

        return (
            <div>
                <HeaderBar />
            <div className="topFormWrapper">
            <form onSubmit={this.changeTopBooks}>
                <label className="searchLabel">
                    Update Top Books
                    </label>
          <input type="text" name="bookTitle" />
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

export default requiresLogin()(connect(mapStateToProps)(topBooksPageUpdate));