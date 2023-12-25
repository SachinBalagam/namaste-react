import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h3>User name: {this.props.name}</h3>
        <h3>Location: Hyderabad</h3>
        <h3>Designation: Software Developer</h3>
      </div>
    );
  }
}

export default UserClass;
