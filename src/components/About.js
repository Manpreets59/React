import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }
  componentDidMount() {
    console.log("parent component did mount called");
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react series</h2>
        <UserClass name={"first (class)"} location={"Punjab"} />
        <UserClass name={"second (class)"} location={"Punjab"} />
      </div>
    );
  }
}

export default About;
