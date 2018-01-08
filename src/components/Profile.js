import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import * as actions from '../actions/profile';



export class Profile extends React.Component {
     constructor(props) {
        super(props);
        this.changeCurrentlyReading = this.changeCurrentlyReading.bind(this);
        // this.addTopBook = this.addTopBook.bind(this);

    }
    componentDidMount() {
        this.props.dispatch(actions.getCurrentlyReading());
    }

      changeCurrentlyReading = (event) => {
        event.preventDefault();
        var param = event.target.bookTitle.value;
        this.props.dispatch(actions.currentBookThunk(param))
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="currentlyReading">
                    <form onSubmit={this.changeCurrentlyReading}>
                        <label>
                            Update Currently Reading:
          <input type="text" name="bookTitle" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    {/*<Book
                        imageSrc={this.props.currentlyReading.imageSrc}
                        author={this.props.currentlyReading.author}
                        title={this.props.currentlyReading.title} />*/}
                </div>
            </div>
        );
    }
}
Profile.defaultProps = {
    text: ''
};

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        // protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Profile));
