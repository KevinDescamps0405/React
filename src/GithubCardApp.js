import React from 'react';
import './GithubCardApp.css';
/*function AppVersionDeux({title}) {
    return (
        <div className="header">{title}</div>
    );
}
*/


/*const AppVersionDeux = ({title})=> (
    <div className="header">{title}</div>
)*/


/*class AppVersionDeux extends React.Component{
    render(){
        return  <div className="header">{this.props.title}</div>
    }
}

export default AppVersionDeux;*/


import App from "./App";
import axios from "axios";

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id}{...profile}/>)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url}/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {
    state = {username: ''}
    userNameInput = React.createRef();
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.username}`)
        console.log(resp.data)
        this.props.onSubmit(resp.data);
        this.setState({username: ''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.username}
                       onChange={event => this.setState({username: event.target.value})}
                       placeholder="Github username"
                       ref={this.userNameInput} required/>
                <button>Add Card</button>
            </form>
        );
    }
}

class GithubCardApp extends React.Component {
    state = {
        profiles: [],
    }

    addNewProfile = (profileData) => {
        console.log('', profileData)
        this.setState(prevData => ({
            profiles: [...prevData.profiles, profileData]
        }))
    };

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}

export default GithubCardApp;
