import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import Author from './Author'
import HeaderBar from './header-bar'
import './bookPage.css'
import * as actions from '../actions/author';

export class authorPage extends React.Component {

    componentDidMount(){
       this.props.dispatch(actions.authorFetchThunk(this.props.id)) 
    }

    removeAuthor = () => {
        this.props.dispatch(actions.authorRemoveThunk(this.props.id, this.props.history))

    }

    render(){
        
        return(
            <div className="authorPage">
                <HeaderBar />
                <div className="containerBook">
                    <div className="info">
                    <span className="authorName">{this.props.currentAuthor.name} </span><br />
                    <span> born: {this.props.currentAuthor.born} </span><br />  
                    <span> died: {this.props.currentAuthor.died}</span><br />
                    <span>Hometown: {this.props.currentAuthor.hometown} </span>
                    </div>
                    <div className="author">
                        <Author
                            imageSrc={this.props.currentAuthor.imageSrc}
                        />
                    </div>
                </div>
                <div className="description">
                    {this.props.currentAuthor.about}
                </div>
                <div className="remove">
                <button className="removeButton" onClick={this.removeAuthor}>Remove Author</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: props.history,
    id: props.match.params.id,
    currentAuthor: state.author.currentAuthor
})



export default requiresLogin()(connect(mapStateToProps)(authorPage));
