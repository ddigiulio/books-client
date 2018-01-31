import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';
import HeaderBar from './header-bar'
export class topAuthorsPageUpdate extends React.Component {

    addTopAuthor = (event) => {
        event.preventDefault();
        var param = event.target.topAuthorTitle.value;
        this.props.dispatch(actions.topAuthorThunk(param, this.props.history))
    }
    render() {

        return (
            <div>
                <HeaderBar />
                <form onSubmit={this.addTopAuthor}>
                    <label>
                        Add Top Author:
          <input type="text" name="topAuthorTitle" />
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

export default requiresLogin()(connect(mapStateToProps)(topAuthorsPageUpdate));