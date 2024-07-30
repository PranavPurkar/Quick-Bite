import React from "react";
import Userclass from "./Userclass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => (<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <Userclass name={"Pranav class"} location={"Nagpur"}/>
            </div>
        )
    }
}

export default About;