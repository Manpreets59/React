import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);
    console.log(props.name + "constructor called");

    this.state = {
      userInfo: {
        name: "dummy",
        blong: "default",
        avatar_url: "https://avtars.io/manpreets59",
      },
    };
  }
  async componentDidMount(){
    console.log(this.props.name + "component did mount called")
    const data = await fetch("https://api.github.com/users/Manpreets59")
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
    console.log(json);
  }

  componentDidUpdate(){
    console.log("Component did update called");
  }

  componentWillUnmount(){
    console.log("component will unmount called");
  }

  render() {
    const { name , blog, avatar_url} = this.state.userInfo
    console.log(name + "render called");
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>blog: india</h3>
        <h4>Contact: {blog}</h4>
      </div>
    );
  }
}

export default UserClass;
