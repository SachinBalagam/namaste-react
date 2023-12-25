import { createContext } from "react";

const UserContext = createContext({
  name: "default User",
});

export default UserContext;
