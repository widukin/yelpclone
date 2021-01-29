import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <Link to={`/restaurants/${restaurant.id}`}>
        <img src={restaurant.img} />
        <p>{restaurant.name}</p>
        <p>{restaurant.city_name}</p>
        {restaurant.tags.map((tag, index) => {
          return <p>{tag.name}</p>;
        })}
      </Link>
    </div>
  );
};
export default RestaurantCard;
