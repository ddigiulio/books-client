import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import * as actions from '../actions/book';
import Book from './book'
import HeaderBar from './header-bar'
import './personBookPage.css'
import image from '../books2.jpg'
import Footer from './footer'
export class personBookPage extends React.Component {

    componentDidMount(){
       this.props.dispatch(actions.bookFetchThunk(this.props.id)) 
    }


    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/personProfile')
    }
    render(){
        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        return(
            <div  style={sectionStyle} className="bookPage">
                <HeaderBar />
                <div className="containerBook">
                    <div className="current">
                        <Book
                            imageSrc={this.props.currentBook.imageSrc}
                        />
                    </div>
                </div>
                <div className="info">
                    <span className="bookTitle">{this.props.currentBook.title} </span><br />
                    <span> by {this.props.currentBook.author} </span><br />  
                    <span>Rating: {this.props.currentBook.rating}</span><br />
                    <span>Published: {this.props.currentBook.pubYear} </span>
                    </div>
                <div className="description">
                    {this.props.currentBook.description}
                </div>
                <div className="goBackContainer">
                <button className="goBackButton" onClick={this.goBack}>Back to profile</button>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
    currentBook: state.book.currentBook
})



export default requiresLogin()(connect(mapStateToProps)(personBookPage));
