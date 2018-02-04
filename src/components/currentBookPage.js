import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import * as actions from '../actions/book';
import Book from './book'
import HeaderBar from './header-bar'
import './currentBookPage.css'

export class currentBookPage extends React.Component {
   
    componentDidMount() {

        this.props.dispatch(actions.bookFetchThunk(this.props.id))
    }

    removeBook = () => {
        this.props.dispatch(actions.bookRemoveThunk(this.props.id, this.props.history))
        // this.setState({
        //     removed: true
        // })
    }

    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/profile')
    }
    render() {

        return (
            <div className="currentBookPage">
                <HeaderBar />
                <div className="containerCurrent">
                    <div className="info">
                    <span className="bookTitle">{this.props.currentBook.title} </span><br />
                    <span className="spans"> by {this.props.currentBook.author} </span><br />  
                    <span className="spans">Rating: {this.props.currentBook.rating}</span><br />
                    <span className="spans">Published: {this.props.currentBook.pubYear} </span>
                    </div>
                    <div className="current">
                        <Book
                            imageSrc={this.props.currentBook.imageSrc}
                        />
                    </div>
                </div>
                <div className="description">
                    {this.props.currentBook.description}

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
    currentBook: state.book.currentBook
})

export default requiresLogin()(connect(mapStateToProps)(currentBookPage));
