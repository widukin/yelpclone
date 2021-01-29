import RestaurantCard from "./RestaurantCard";

const RestaurantGrid = ({ restaurants }) => {
  return (
    <div className="restauran-grid">
      {restaurants.map((iteration, index) => {
        return <RestaurantCard key={index} restaurant={iteration} />;
      })}
    </div>
  );
};
export default RestaurantGrid;
