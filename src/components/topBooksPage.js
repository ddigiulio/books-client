import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import {Redirect} from 'react-router-dom';

export class topBooksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            done: false
        }
    }

    changeTopBooks = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.topBooksThunk(param))
        this.setState({
            done: true
        })
    }

    render() {
        if (this.state.done){
            return (
                <Redirect exact to='/profile' />
            )
        }
        return (
            <form onSubmit={this.changeTopBooks}>
                <label>
                    Update Top Books:
          <input type="text" name="bookTitle" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default requiresLogin()(connect()(topBooksPage));