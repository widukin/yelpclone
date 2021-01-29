import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";

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
    <div>
      <img src={restaurant.img} />
      <p>{restaurant.name}</p>
      <p>{restaurant.city_name}</p>
      {restaurant.tags.map((tag, index) => {
        return <p key={index}>{tag.name}</p>;
      })}
      <ul>
        {restaurant.comments.map((comment, index) => {
          return <li key={index}>{comment.text}</li>;
        })}
      </ul>
    </div>
  );
};
export default ViewRestaurant;
