import { CARD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  // const { name, sla, cuisines, avgRating, cloudinaryImageId, costForTwo } =
  //   data;

  // console.log(data);

  return (
    <div className="w-[250] m-5 bg-gray-100 p-3 rounded h-[350] hover:bg-gray-200">
      <img
        src={CARD_IMG + data.cloudinaryImageId}
        alt="logo"
        className="h-[40%] w-[100%]"
      />
      <h3 className="font-bold my-5">{data.name}</h3>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>{data.costForTwo}</h4>
      <h4>{`${data.avgRating} Rating.`}</h4>
      <h4>{`${data.sla.slaString} Approx.`}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
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
