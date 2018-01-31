import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import HeaderBar from './header-bar'
export class currentBookPageUpdate extends React.Component {
    

    changeCurrentlyReading = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.currentBookThunk(param, this.props.history))
        
    }

    render() {
        
        return (
            <div>
                <HeaderBar />
            <form onSubmit={this.changeCurrentlyReading}>
                <label>
                    Update Currently Reading:
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

export default requiresLogin()(connect(mapStateToProps)(currentBookPageUpdate));