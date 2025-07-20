import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // Fetch data
  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json?.data || []);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
