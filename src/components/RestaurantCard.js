import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <Link className="restaurant-card" to={`/restaurants/${restaurant._id}`}>
        <img

                   className="restaurant-card-image"
         
          src={restaurant.img}
         
          alt={`${restaurant.name} picture`}
        
        />
        <div className="restaurant-card-content">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          <p className="restaurant-city">{restaurant.city_name}</p>
          {restaurant.tags.map((tag, index) => {
            return <p key={index}>{tag.name}</p>;
          })}
        </div>
      </Link>
    </div>
  );
};
export default RestaurantCard;
