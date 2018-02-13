import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import './topBooksPageUpdate.css'
import HeaderBar from './header-bar'
import image from '../books2.jpg'
import SearchResultTopBook from './searchResultTopBook'

export class topBooksPageUpdate extends React.Component {
    
    changeTopBooks = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.topBooksThunk(param, this.props.history))
       
    }

    render() {
        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        let result, title, help;
        if (!this.props.searchResults) {
            help = <div className="helpTopBooks">Use the search box to add a favorite book</div>
            result = null;
        }
        else {
            result = this.props.searchResults.map((book, index) =>
                <div className="searchTopBooks">
                    <SearchResultTopBook
                        title={book.title}
                        imageSrc={book.imageSrc}
                        author={book.author.name[0]}
                        id={book.bookID}
                        history={this.props.history} />
                </div>);
          
            title = <div className="searchResultsTitle">Search Results</div>
            help = "";
        }
        return (
            <div style={sectionStyle} className="searchPageTopBooks">
                <HeaderBar />
                {help}
            <div className="topFormWrapper">
            <form onSubmit={this.changeTopBooks}>
                <label className="searchLabelTopBooks">
                    Search for a new book
                    </label>
          <input type="text" name="bookTitle" /><br />
                <input type="submit" value="Submit" />
            </form>
            </div>
            {title}
            <div className="searchResultsTopBooks">
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