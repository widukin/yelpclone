import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <Link to={`/restaurants/${restaurant._id}`}>
        <img src={restaurant.img} alt={restaurant.name} />
        <p>{restaurant.name}</p>
        <p>{restaurant.city_name}</p>
        {restaurant.tags.map((tag, index) => {
          return <p key={index}>{tag.name}</p>;
        })}
      </Link>
    </div>
  );
};
export default RestaurantCard;
