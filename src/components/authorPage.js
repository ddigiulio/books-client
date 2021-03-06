import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import Author from './Author'
import HeaderBar from './header-bar'
import './bookPage.css'
import * as actions from '../actions/author';
import './authorPage.css'
import image from '../books2.jpg'
import Footer from './footer'
export class authorPage extends React.Component {

    componentDidMount(){
       this.props.dispatch(actions.authorFetchThunk(this.props.id)) 
    }

    removeAuthor = () => {
        this.props.dispatch(actions.authorRemoveThunk(this.props.id, this.props.history))

    }

    render(){
        const sectionStyle = {
            backgroundImage: `url(${image})`
        }
        return(
            <div style={sectionStyle} className="authorPage">
                <HeaderBar />
                <div className="containerAuthor">
                    <div className="authorCurrent">
                        <Author
                            imageSrc={this.props.currentAuthor.imageSrc}
                        />
                    </div>
                </div>
                <div className="infoContainer">  
                    <span className="authorName">{this.props.currentAuthor.name} </span><br />
                    <span className="span"> Born: {this.props.currentAuthor.born} </span><br />  
                    <span className="span"> Died: {this.props.currentAuthor.died}</span><br />
                    <span className="span">Hometown: {this.props.currentAuthor.hometown} </span>
                </div>
                <div className="descriptionAuthor">
                    {this.props.currentAuthor.about}
                </div>
                <div className="remove">
                <button className="removeButton" onClick={this.removeAuthor}>Remove Author</button>
                </div>
                <Footer />
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
