import React from "react";
class UserClass extends React.Component {
    constructor(props){
    super(props)
    console.log(props);
    this.state = {
    userInfo: {
        name: "Dummy",
        location: "kanpur"
    }
    }
}

async componentDidMount() {
// console.log("did mount")
const UserData = await fetch("https://api.github.com/users/adarsh");
const json = await UserData.json();
console.log(json)
this.setState(
    {
        userInfo: json
    }
)
}
componentDidUpdate(){
  this.timer =  setInterval(
    ()=>{
        console.log("namste")
    }
    ,1000)   
     console.log("update")
}
componentWillUnmount(){
    clearInterval(this.timer)
    console.log("Unmount")
}
render(){
    const{name,location} = this.state.userInfo;
    return(
        <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Contact: 8172802169</h3>
        <h3>Location: {location}</h3>
        </div>
    );
}

}
export default UserClass;