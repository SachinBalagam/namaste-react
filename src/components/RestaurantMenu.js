import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuInfo from "./MenuInfo";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const { id } = useParams();

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7488379&lng=78.00351719999999&restaurantId=${id}`
    );
    const json = await data.json();
    setRestaurantInfo(json);
    // console.log(json.data.cards[0].card.card.info);
  };

  if (restaurantInfo === null) return <h1>Loading....</h1>;

  // console.log(restaurantInfo.data.cards[0].card.card.info);

  const menuList =
    restaurantInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (each) =>
        each.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(menuList);

  // console.log(menuList[0].card.card.itemCards);

  const { name, cuisines, locality, costForTwoMessage } =
    restaurantInfo.data.cards[0].card.card.info;

  return (
    <div className="text-center py-5 flex flex-col items-center">
      <h1 className="text-2xl">{name}</h1>
      <h4>
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>
      <h4>{locality}</h4>

      <h1 className="my-5 underline">Menu</h1>
      {menuList.map((each) => (
        <MenuInfo data={each.card.card} key={each.card.card.title} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
