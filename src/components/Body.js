import resList from "../utils/mockdata";
import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { Button } from "@mui/material";
import { useState } from "react";
import { resList } from "../utils/mockdata";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <Button
          variant="contained"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </Button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Restaurantcard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
