import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import mockData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7488379&lng=78.00351719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const RestaurantList = json.data.cards.filter(
      (each) => each.card.card["id"] === "restaurant_grid_listing"
    );
    // console.log(
    //   RestaurantList[0].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListofRestaurants(
      RestaurantList[0].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListofRestaurants(
      RestaurantList[0].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const updateValue = () => {
    return (e) => {
      setSearchText(e.target.value);
    };
  };

  const onClickSearch = () => {
    return () => {
      setFilteredListofRestaurants(
        listofRestaurants.filter((each) =>
          each.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    };
  };

  if (listofRestaurants.length === 0) return <h1>Loading....</h1>;

  return (
    <div className="my-5 flex flex-col items-center min-h-[75vh]">
      <div className="ml-5 flex my-5">
        <div className="flex items-center mr-10">
          <input
            className="border border-solid mr-3"
            type="search"
            value={searchText}
            onChange={updateValue()}
          />
          <button
            className="bg-green-100 px-5 py-1 rounded-sm"
            onClick={onClickSearch()}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-200 px-5 py-1 rounded "
          onClick={() => {
            setFilteredListofRestaurants(
              listofRestaurants.filter((each) => each.info.avgRating > 4.3)
            );
          }}
        >
          Filter Button
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredListofRestaurants.map((eachRes) =>
          eachRes.info.isOpen ? (
            <Link key={eachRes.info.id} to={`/restaurant/${eachRes.info.id}`}>
              <RestaurantCardPromoted key={eachRes.info.id} data={eachRes} />
            </Link>
          ) : (
            <Link key={eachRes.info.id} to={`/restaurant/${eachRes.info.id}`}>
              <RestaurantCard data={eachRes} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
