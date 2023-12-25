import UserClass from "./UserClass";

import User from "./User";

const About = () => {
  return (
    <div className="min-h-[80vh]">
      <h1>About</h1>
      <h3>Hello, This is Sachin Balagam</h3>
      <UserClass name={"Sachin Balagam (class)"} />
      <User data={"Sachin (function)"} />
    </div>
  );
};

export default About;
