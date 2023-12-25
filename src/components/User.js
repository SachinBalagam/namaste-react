const User = (props) => {
  const { data } = props;
  return (
    <div className="users-card">
      <h3>User Name:{data} </h3>
      <h3>City: Hyderabad</h3>
      <h3>Designation: Software Developers</h3>
    </div>
  );
};

export default User;
