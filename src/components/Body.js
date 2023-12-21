import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7488379&lng=78.00351719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListofRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body-container">
      <div>
        <h1>Search</h1>
      </div>
      <div className="cards-container">
        {listofRestaurants.map((eachRes) => (
          <RestaurantCard key={eachRes.info.id} data={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;
