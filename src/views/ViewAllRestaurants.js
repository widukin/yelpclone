// Import react modules
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//Import components
import RestaurantGrid from "../components/RestaurantGrid";
// Import api functionality
import Api from "../api/index";

const ViewAllRestaurants = () => {
  const [restaurantsAll, setRestaurantsAll] = useState([]);
  const { search } = useParams();

  useEffect(() => {

    search 
    ? Api.getRestaurantsFiltered()
      .then((res) => setRestaurantsAll(res))
      .catch((err) => console.error(err))
    : Api.getAllRestaurants()
      .then((res) => setRestaurantsAll(res))
      .catch((err) => {console.error(err)})
  }, [search]);


  return(
    <>
      <RestaurantGrid restaurants={restaurantsAll} />
    </>
  );
};
export default ViewAllRestaurants;




