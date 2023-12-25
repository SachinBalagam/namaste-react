import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <UserContext.Consumer>
          {({ name }) => (
            <h3 className="text-2xl">
              User name: <span className="font-bold">{name} </span>
            </h3>
          )}
        </UserContext.Consumer>
        <h3 className="text-2xl">
          Location: <span className="font-bold">Hyderabad</span>
        </h3>
        <h3 className="text-2xl">
          Designation: <span className="font-bold">Software Developer</span>
        </h3>
      </div>
    );
  }
}

export default UserClass;
