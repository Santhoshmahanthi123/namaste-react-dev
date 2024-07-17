import resList from "../utils/mockdata";
import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { Button } from "@mui/material";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      id: "11091",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      avgRatingString: "4.0",
      sla: {
        deliveryTime: 27,
      },
    },
    {
      id: "11092",
      name: "Dominos",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas", "Burgers"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      sla: {
        deliveryTime: 16,
      },
    },
    {
      id: "11098",
      name: "Mecdonalds",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas", "Burgers", "French Fried"],
      avgRating: 4.5,
      avgRatingString: "4.4",
      sla: {
        deliveryTime: 15,
      },
    },
  ]);
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
