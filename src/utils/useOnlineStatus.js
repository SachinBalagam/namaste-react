import { useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });
    window.addEventListener("offline", () => {
      setStatus(false);
    });
  }, []);

  return status;
};

export default UseOnlineStatus;
