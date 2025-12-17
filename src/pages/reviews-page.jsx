import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurant/restaurantSlice";
import { Reviews } from "../components/reviews/reviews";
import { ReviewForm } from "../components/review-form/review-form";
import { useUser } from "../context/user-context";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { user } = useUser();

  if (!restaurant) return <p>Ресторан не найден</p>;

  return (
    <div>
      <h3>Отзывы о {restaurant.name}</h3>
      <Reviews reviewIds={restaurant.reviews} />
      {user && <ReviewForm restaurantId={restaurantId} />}
    </div>
  );
};
