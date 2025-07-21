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
      <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
        <div className="max-w-2xl w-full text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">About</h1>
          <h2 className="text-lg text-gray-600">
            This is{" "}
            <span className="font-semibold text-blue-600">
              Namaste React Series
            </span>
          </h2>
        </div>
        <div className="mt-10 w-full max-w-xl">
          <UserClass name={"first (class)"} location={"Punjab"} />
        </div>
      </div>
    );
  }
}

export default About;
