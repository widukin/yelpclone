import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <Link className="restaurant-card" to={`/restaurants/${restaurant._id}`}>
        <img
          className="restaurant-card-image"
          src={restaurant.img}
          alt={`${restaurant.name}`}
        />
        <div className="restaurant-card-content">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          {restaurant.cityId ? (((((
            <p className="restaurant-city">{restaurant.cityId.name}</p>




          )          )          )          )          ) : null}
          {restaurant.tagId ? (((((
            <p className="restaurant-city">{restaurant.tagId.name}</p>
          )
          )
          )
          )
          ) : null}
        </div>
      </Link>
    </div>
  );
};
export default RestaurantCard;
