import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import HeaderBar from './header-bar'
import SearchResultCurrent from './searchResultCurrent'
import "./currentBookPageUpdate.css"
import image from '../books2.jpg'

export class currentBookPageUpdate extends React.Component {

    changeCurrentlyReading = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.currentBookThunk(param, this.props.history))
    }

    render() {

        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        let result, title, help;
        if (!this.props.searchResults) {
            help = <div className="helpCurrent">Use the search box to add which book you are currently reading</div>
            result = null;
        }
        else {
            result = this.props.searchResults.map((book, index) =>
                <div className="searchCurrentBook">
                    <SearchResultCurrent
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
            <div style={sectionStyle} className="searchPage">
                <HeaderBar />
                {help}
                <div className="currentFormWrapper">
                    <form onSubmit={this.changeCurrentlyReading}>
                        <label className="searchLabelCurrent">
                            Search for a new book
                        </label><br />
                        <input type="text" name="bookTitle" /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                {title}
                <div className="searchResultsCurrent">          
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