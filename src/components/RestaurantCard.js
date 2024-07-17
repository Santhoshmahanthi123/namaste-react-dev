import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData;
  const { deliveryTime } = resData?.sla;
  const styleCard = {
    backgroundColor: "skyblue",
  };
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-img"
        className="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
