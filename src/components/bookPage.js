import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import * as actions from '../actions/book';
import Book from './book'
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom'


export class bookPage extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
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
    render(){
        
        return(
            <div> 
                <Book
                    imageSrc={this.props.currentBook.imageSrc}
                    author={this.props.currentBook.author}
                    title={this.props.currentBook.title} />
                <div className="description">
                {this.props.currentBook.description}
                <div className="info">
                <span>{this.currentBook.rating}</span>
                <span>`{this.currentBook.pubYear} / {this.currentBook.pubMonth}`</span>
                </div>
                </div>
                <button onClick={this.removeBook}>Remove</button>
                <button onClick={this.goBack}>Go Back</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
    currentBook: state.book.currentBook
})



export default connect(mapStateToProps)(bookPage);
