import { CARD_IMG } from "../utils/constants";

const RestaurantCard = (data) => {
  const { name, sla, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    data?.data?.info;

  return (
    <div className="w-[250] m-5 bg-gray-100 p-3 rounded h-[350] hover:bg-gray-200">
      <img
        src={CARD_IMG + cloudinaryImageId}
        alt="logo"
        className="h-[40%] w-[100%]"
      />
      <h3 className="font-bold my-5">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{`${avgRating} Rating.`}</h4>
      <h4>{`${sla.slaString} Approx.`}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white my-10 mx-5 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
