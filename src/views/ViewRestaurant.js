import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import Comments from "../components/comments"

const ViewRestaurant = () => {
  const { id } = useParams();

  let [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const requestData = async () => {
      const rest = await Api.getRestaurantById(id);
      console.log(rest);
      setRestaurant(await Api.getRestaurantById(id));
    };
    requestData();
  }, [id]);

  return !restaurant ? null : (
    <div className="view_restaurant">
      
      <div className="view_restaurant_content">
        <h2>{restaurant.name}</h2>
        <h4>{restaurant.city_name}</h4>
        {restaurant.tags.map((tag) => {
          return <p key={tag.id}>{tag.name}</p>;
        })}
        <Comments comments={restaurant.comments}></Comments>
      </div>
      <img className="view_restaurant_image" src={restaurant.img} />
    </div>
  );
};
export default ViewRestaurant;
