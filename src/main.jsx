import React from 'react';
// импортируем массив из mock.js
import { restaurants } from './mock.js';
import { createRoot } from 'react-dom/client';

console.log(restaurants); // проверка, что массив импортировался

const root = document.getElementById('root');

const reactRoot = createRoot(root);

// console.log(reactRoot);

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

// reactRoot.render(
//   <div className="some-class" style={{ color: "blue" }}>
//     {restaurants.map((restaurant) => (
//       <div key={restaurant.id}>
//         <p>{restaurant.name}</p>
//         <h3>Меню</h3>
//         <ul>
//           {restaurant.menu.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//         <h3>Отзывы</h3>
//         <ul>
//           {restaurant.reviews.map((review) => (
//             <li key={review.id}>{review.text}</li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// );
