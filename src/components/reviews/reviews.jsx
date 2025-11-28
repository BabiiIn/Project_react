export const Reviews = ({ reviews = [] }) => {
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
};

