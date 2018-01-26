import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import {Redirect} from 'react-router-dom';
export class currentBookPageUpdate extends React.Component {
    constructor(props) {
        super(props);
       
    }

    changeCurrentlyReading = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.currentBookThunk(param, this.props.history))
        
    }

    goBack = (event) => {
        event.preventDefault;
        this.props.history.push('/profile')
    }
    render() {
        
        return (
            <div>
            <form onSubmit={this.changeCurrentlyReading}>
                <label>
                    Update Currently Reading:
          <input type="text" name="bookTitle" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={this.goBack}>Go Back </button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
})

export default requiresLogin()(connect(mapStateToProps)(currentBookPageUpdate
));