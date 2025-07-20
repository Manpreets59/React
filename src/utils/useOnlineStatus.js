import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  // check if online or offline
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  });

  // boolena value
  return OnlineStatus;
};
export default useOnlineStatus;
