import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import {Redirect} from 'react-router-dom';
import HeaderBar from './header-bar'

export class topBooksPageUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            done: false
        }
    }

    changeTopBooks = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.topBooksThunk(param, this.props.history))
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
            <div>
                <HeaderBar />
            <form onSubmit={this.changeTopBooks}>
                <label>
                    Update Top Books:
          <input type="text" name="bookTitle" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
})

export default requiresLogin()(connect(mapStateToProps)(topBooksPageUpdate));