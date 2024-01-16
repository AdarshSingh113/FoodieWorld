import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props)
        // console.log("parent constructor")
    }
    render(){

    return(
       
        <div className="about">
            <h1>Anushree</h1>
            <div>
                Logged inUser
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>Mai bol ni sakta</h2>
            <UserClass  name="adarsh"  />
        </div>
    );
    }
}

export default About;