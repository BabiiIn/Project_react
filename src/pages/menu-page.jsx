import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurant/restaurantSlice";
import { Menu } from "../components/menu/menu";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return <p>Ресторан не найден</p>;

  return (
    <div>
      <h3>Меню ресторана {restaurant.name}</h3>
      <Menu dishIds={restaurant.menu} />
    </div>
  );
};
