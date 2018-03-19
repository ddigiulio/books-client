import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import * as actions from '../actions/book';
import Book from './book'
import HeaderBar from './header-bar'
import './currentBookPage.css'
import Footer from './footer'
import image from '../books2.jpg'

export class currentBookPage extends React.Component {
   
    componentDidMount() {

        this.props.dispatch(actions.bookFetchThunk(this.props.id))
    }

    removeBook = () => {
        this.props.dispatch(actions.bookRemoveThunk(this.props.id, this.props.history))

    }

    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/profile')
    }
    render() {

        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        return (
            <div style={sectionStyle} className="currentBookPage">
                <HeaderBar />
                <div className="containerCurrentBook">
                    <div className="current_">
                        <Book
                            imageSrc={this.props.currentBook.imageSrc}
                        />
                    </div>
                </div>
                <div className="infoCurrent">
                    <span className="bookTitleCurrent">{this.props.currentBook.title} </span><br />
                    <span className="spans"> by {this.props.currentBook.author} </span><br />  
                    <span className="spans">Rating: {this.props.currentBook.rating}</span><br />
                    <span className="spans">Published: {this.props.currentBook.pubYear} </span>
                    </div>
                <div className="descriptionCurrent">
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
