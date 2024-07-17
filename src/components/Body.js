import resList from "../utils/mockdata";
import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { resList } from "../utils/mockdata";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let res =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    res = res.map((restaurant) => restaurant.info);
    setListOfRestaurants(res);
    console.log(res);
  };

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
