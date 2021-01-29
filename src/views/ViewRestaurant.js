import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";

const ViewRestaurant = () => {
  const { _id } = useParams();

  let [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    const requestData = async () => {
      setRestaurant(await Api.getRestaurantById(_id));
    };
    requestData();
  }, [_id]);

  return (
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
