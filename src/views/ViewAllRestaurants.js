// Import react modules
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//Import components
import RestaurantGrid from "../components/RestaurantGrid";
// Import api functionality
import Api from "../api/index";

const ViewAllRestaurants = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const { tagId, cityId } = useParams();


  useEffect(() => {
    console.log("tagId", tagId);
    console.log("cityId", cityId);

    Api.getAllRestaurants()
    .then((res) => {
      console.log(res);
      let restaurantsFiltered = [];
      
      if (tagId || cityId) {
        res.forEach(restaurant => {
          if (restaurant.cityId) {
            if (tagId === restaurant.tagId._id || cityId === restaurant.cityId._id) {
              restaurantsFiltered.push(restaurant);
            }
          } else if (restaurant.city_id) {
            if (tagId === restaurant.tagId._id || cityId === restaurant.city_id) {
              restaurantsFiltered.push(restaurant);
            }
          }
        });
        console.log(restaurantsFiltered);
        setRestaurantsList(restaurantsFiltered);
      } else {
        setRestaurantsList(res);
      }
    })
    .catch((err) => {console.log("ERROR"); console.error(err)})

/*     tagId
    ? (

      Api.getAllRestaurants()
      .then((res) => {
        let restaurantsByTag = [];
        res.forEach(restaurant => {
          if (tagId === restaurant.tagId._id) {
            restaurantsByTag.push(restaurant);
            setRestaurantsList(restaurantsByTag);
          }
        });
      })
      .catch((err) => console.error(err))
    )
    : Api.getAllRestaurants()
      .then((res) => setRestaurantsList(res))
      .catch((err) => {console.error(err)}) */
  }, [tagId, cityId]);


  return(
    <>
      <RestaurantGrid restaurants={restaurantsList} />
    </>
  );
};
export default ViewAllRestaurants;




