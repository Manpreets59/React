import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react series</h2>
      <User name = {"Manpreet Singh (functional)"} location={"Punjab"}/>
      <UserClass name = {"Manpreet Singh (class)"} location={"Punjab"}/>
    </div>
  );
};
export default About;
