import { RestaurentCard, withPromotedLabel } from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

export const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);

  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.55180&lng=81.52430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setfilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  // online status
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return (
      <h1>Looks like you are offline please check your internet connection</h1>
    );
  }
  const { loggedInUser, setUserName } = useContext(userContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-4 py-6">
      <div className="filter flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-8 ">
        <div className="search flex gap-2">
          <input
            type="text"
            data-testid = "searchInput"
            placeholder="Search Restaurents"
            className="border border-gray-400 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2  focus:ring-blue-500 "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurent = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase());
              });
              setfilteredRestaurent(filteredRestaurent);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4
            );
            setfilteredRestaurent(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <div className="search m-4 flex item-center">
          <label>UserName</label>
          <input
            className="border border-black p-2"
            value = {loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurent.length === 0 ? (
          <h2 className="text-center text-gray-500 col-span-full">
            No restaurants found.
          </h2>
        ) : (
          filteredRestaurent.map((restaurent) => (
            <Link
              key={restaurent?.info.id}
              to={"/restaurant/" + restaurent?.info.id}
            >
              {
                /* If the restaurent is promoted then add a promoted label to it  */
                restaurent?.info?.promoted ? (
                  <RestaurantCardPromoted
                    key={restaurent?.info.id}
                    resData={restaurent?.info}
                  />
                ) : (
                  <RestaurentCard
                    key={restaurent?.info.id}
                    resData={restaurent?.info}
                  />
                )
              }
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
