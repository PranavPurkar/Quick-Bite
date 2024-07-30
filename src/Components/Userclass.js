import React from "react";
import User from "./User";

class Userclass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                Name: 'PranavPurkar',
                bio: 'Full Stack Developer',
                avatar_url : "https://avatars.githubusercontent.com/u/66577385?v=4",
            },  
        }
    }

    async componentDidMount () {
        const data = await fetch('https://api.github.com/users/PranavPurkar');
        const json = await data.json();
        console.log(json);
        

        this.setState({
           userInfo: json
        });

        console.log(json);
    }

    render() {
       const {name,bio,location,avatar_url}  = this.state.userInfo

        return (
            <div className="user-card">
            <img src={avatar_url} alt="name"/>
            <h1>Name: {name}</h1>
            <h3>BIO : {bio}</h3>
            <h3>Location : {location}</h3>
        </div>
        )
    }
}

export default Userclass;