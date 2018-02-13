import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import HeaderBar from './header-bar'
import './topAuthorsPageUpdate.css'
import image from '../books2.jpg'
import SearchResultTopAuthor from './searchResultTopAuthor'

export class topAuthorsPageUpdate extends React.Component {

    addTopAuthor = (event) => {
        event.preventDefault();
        var param = event.target.topAuthorTitle.value;
        this.props.dispatch(actions.topAuthorThunk(param, this.props.history))
    }
    render() {
        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        let result, title, help;
        if (this.props.searchResults.length === 0) {
            help = <div className="helpTopAuthors">Use the search box to add a favorite author</div>
            result = null;
            title= "";
        }
        else {
            result = this.props.searchResults.map((author, index) =>
                <div className="searchTopAuthors">
                    <SearchResultTopAuthor
                        imageSrc={author.imageSrc}
                        author={author.name}
                        id={author.id}
                        history={this.props.history} />
                </div>);
          
            title = <div className="searchResultsTitle">Search Results</div>
            help = "";
        }
        return (
            <div style={sectionStyle} className="searchPageTopAuthors">
                <HeaderBar />
                {help}
                <div className="topAuthorsFormWrapper">
                <form onSubmit={this.addTopAuthor}>
                    <label className="searchLabelTopAuthors">
                        Search for a new author
                        </label>
          <input type="text" name="topAuthorTitle" /><br />
                    <input type="submit" value="Submit" />
                </form>
                </div>
                {title}
                <div className="searchResultsTopAuthors">
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