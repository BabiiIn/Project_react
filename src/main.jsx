import { restaurants } from './mock.js';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

function Menu({ items = [] }) {
  const safeMenu = Array.isArray(items) ? items : [];

  if (safeMenu.length === 0) {
    return <p>Меню пока пусто.</p>;
  }

  return (
    <ul>
      {safeMenu.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

function Reviews({ reviews = [] }) {
  const safeReviews = Array.isArray(reviews) ? reviews : [];

  if (safeReviews.length === 0) {
    return <p>Пока нет отзывов.</p>;
  }

  return (
    <ul>
      {safeReviews.map((review) => (
        <li key={review.id}>{review.text}</li>
      ))}
    </ul>
  );
}

reactRoot.render(
  <div className="some-class" style={{ color: 'blue' }}>
    {restaurants.map((restaurant) => (
      <div key={restaurant.id}>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {restaurant.name}
        </p>
        <h3>Меню</h3>
        <Menu items={restaurant.menu} />
        <h3>Отзывы</h3>
        <Reviews reviews={restaurant.reviews} />
      </div>
    ))}
  </div>
);
