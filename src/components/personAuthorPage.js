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

    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/personProfile')
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
                    <span> born: {this.props.currentAuthor.born} </span><br />  
                    <span> died: {this.props.currentAuthor.died}</span><br />
                    <span>Hometown: {this.props.currentAuthor.hometown} </span>
                </div>
                <div className="description">
                    {this.props.currentAuthor.about}
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
    currentAuthor: state.author.currentAuthor
})



export default requiresLogin()(connect(mapStateToProps)(authorPage));
