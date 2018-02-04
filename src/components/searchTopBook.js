import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import * as actions from '../actions/profile';
import Book from './book'
import HeaderBar from './header-bar'
import './bookPage.css'
import './searchTopBook.css'
export class searchTopBook extends React.Component {

    componentDidMount(){
       
        const currentBook = this.props.searchResults.filter(book => book.bookID === this.props.id)
        this.props.dispatch(actions.updateBookPage(currentBook))
    }

    addBook = () => {
        
        this.props.dispatch(actions.addTopBookThunk(this.props.id, this.props.history))

    }

    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/updateTopBooksPage')
    }
    render(){
        
        return(
            <div className="searchBook">
                <HeaderBar />
                <div className="containerBook">
                    <div className="info">
                    <span className="bookTitle">{this.props.currentBook.title} </span><br />
                    <span> by {this.props.currentBook.author} </span><br />  
                    <span>Rating: {this.props.currentBook.rating}</span><br />
                    <span>Published: {this.props.currentBook.pubYear} </span>
                    </div>
                    <div className="current">
                        <Book
                            imageSrc={this.props.currentBook.imageSrc}
                        />
                    </div>
                </div>
                <div className="buttonsContainer">        
                        <button className="goBack buttonsCurrent" onClick={this.goBack}>Search Results</button>
                        <button className="addBook buttonsCurrent" onClick={this.addBook}>Add Book</button>          
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
    currentBook: state.profile.currentBook,
    searchResults: state.profile.searchResults
})



export default requiresLogin()(connect(mapStateToProps)(searchTopBook));
