import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import * as actions from '../actions/book';
import Book from './book'
import HeaderBar from './header-bar'
import './currentBookPagePerson.css'
import image from '../books2.jpg'

export class currentBookPagePerson extends React.Component {
   
    componentDidMount() {

        this.props.dispatch(actions.bookFetchThunk(this.props.id))
    }


    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/personProfile')
    }
    render() {

        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        return (
            <div style={sectionStyle} className="currentBookPagePerson">
                <HeaderBar />
                <div className="containerCurrentBookPerson">
                    <div className="currentPerson">
                        <Book
                            imageSrc={this.props.currentBook.imageSrc}
                        />
                    </div>
                </div>
                <div className="infoCurrentPerson">
                    <span className="bookTitleCurrentPerson">{this.props.currentBook.title} </span><br />
                    <span> by {this.props.currentBook.author} </span><br />  
                    <span>Rating: {this.props.currentBook.rating}</span><br />
                    <span>Published: {this.props.currentBook.pubYear} </span>
                    </div>
                <div className="descriptionCurrentPerson">
                    {this.props.currentBook.description}
                </div>
              <div className="goBackContainer">
                <button className="goBackButtonPerson" onClick={this.goBack}>Back to profile</button>
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

export default requiresLogin()(connect(mapStateToProps)(currentBookPagePerson));
