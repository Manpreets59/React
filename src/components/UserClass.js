import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);
    console.log(props.name + "constructor called");

    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    console.log(this.props.name + "component did mount called")
  }
  render() {
    const  {name,location} = this.props;
    const {count} = this.state;
    console.log(name + "render called");
    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button onClick={() => this.setState({
          count: count + 1,
        })}>count Inc</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: manpreets95828@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
