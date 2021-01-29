import RestaurantCard from "./RestaurantCard";

const RestaurantGrid = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((iteration, index) => {
        return (
          <RestaurantCard
            key={index}
            restaurant={iteration}
            className="restaurant-card"
          />
        );
      })}
    </div>
  );
};
export default RestaurantGrid;
