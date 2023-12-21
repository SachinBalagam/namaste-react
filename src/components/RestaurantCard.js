import { CARD_IMG } from "../utils/constants";

const RestaurantCard = (data) => {
  const { name, sla, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    data?.data?.info;

  return (
    <div className="restaurant-card" style={{ background: "#f0f0f0" }}>
      <img src={CARD_IMG + cloudinaryImageId} alt="logo" className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{`${avgRating} Rating.`}</h4>
      <h4>{`${sla.slaString} Approx.`}</h4>
    </div>
  );
};

export default RestaurantCard;
