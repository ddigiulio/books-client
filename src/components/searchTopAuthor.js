import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import * as actions from '../actions/profile';
import Author from './Author'
import HeaderBar from './header-bar'
import './bookPage.css'
import './searchTopAuthor.css'
export class searchTopAuthor extends React.Component {

    componentDidMount(){
       
        const currentAuthor = this.props.searchResults.filter(author => author.id === this.props.id)
        
        this.props.dispatch(actions.updateTopAuthor(currentAuthor))
    }

    addAuthor = () => {
        
        this.props.dispatch(actions.addTopAuthorThunk(this.props.id, this.props.history))

    }

    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/updateTopAuthorsPage')
    }
    render(){
        
        return(
            <div className="searchAuthor">
                <HeaderBar />
                <div className="containerAuthor">
                    <div className="authorCurrent">
                        <Author
                            imageSrc={this.props.currentAuthor.imageSrc}/>
                    </div>
                <div className="authorTitle">
                {this.props.currentAuthor.name}
                </div>
                <div className="buttonsContainer">        
                    <button className="goBackButton buttonsCurrent" onClick={this.goBack}>Search Results</button>
                    <button className="addBook buttonsCurrent" onClick={this.addAuthor}>Add Author</button>          
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
    currentAuthor: state.profile.currentAuthor,
    searchResults: state.profile.searchResults
})



export default requiresLogin()(connect(mapStateToProps)(searchTopAuthor));
