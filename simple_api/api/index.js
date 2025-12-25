const router = require("express").Router();
const { nanoid } = require("nanoid");
const { restaurants, products, reviews, users } = require("./mock");
const { reply, getById, updateById } = require("./utils");

router.get("/restaurants", (req, res, _next) => {
  console.log("request");
  reply(res, restaurants);
});

router.get("/restaurant/:restaurantId", (req, res, _next) => {
  const restaurantId = req.params?.restaurantId;
  let restaurant;

  if (restaurantId) {
    restaurant = getById(restaurants)(restaurantId);
  }

  reply(res, restaurant);
});

router.get("/dishes", (req, res, _next) => {
  const { restaurantId, dishId } = req.query;
  let result = products;

  if (restaurantId) {
    const restaurant = getById(restaurants)(restaurantId);
    if (restaurant) {
      result = restaurant.menu.map(getById(result));
    }
  }

  if (!restaurantId && dishId) {
    result = getById(result)(dishId);
  }
  reply(res, result);
});

router.get("/dish/:dishId", (req, res, _next) => {
  const dishId = req.params?.dishId;
  let product;

  if (dishId) {
    product = getById(products)(dishId);
  }
  reply(res, product);
});

router.get("/reviews", (req, res, _next) => {
  const { restaurantId } = req.query;
  let result = reviews;
  if (restaurantId) {
    const restaurant = getById(restaurants)(restaurantId);
    if (restaurant) {
      result = restaurant.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.post("/review/:restaurantId", (req, res, _next) => {
  const body = req.body;
  const restaurantId = req.params?.restaurantId;
  const restaurant = restaurantId && getById(restaurants)(restaurantId);
  let newReview = {};

  if (restaurant && body) {
    const newReviewId = nanoid();

    newReview = {
      ...body,
      id: newReviewId,
    };
    restaurant.reviews.push(newReviewId);
    reviews.push(newReview);
  }

  reply(res, newReview);
});

router.patch("/review/:reviewId", (req, res, _next) => {
  const body = req.body;
  const reviewId = req.params?.reviewId;
  let updatedReview;

  if (reviewId) {
    updatedReview = updateById(reviews)(reviewId, body);
  }

  reply(res, updatedReview);
});

router.get("/users", (req, res, _next) => {
  reply(res, users);
});
// Добавление маршрута DELETE
router.delete("/review/:reviewId", (req, res, _next) => {
  const reviewId = req.params?.reviewId;

  if (!reviewId) {
    return reply(res, { error: "No reviewId provided" }, 400);
  }

  // Находим отзыв
  const reviewIndex = reviews.findIndex((r) => r.id === reviewId);
  if (reviewIndex === -1) {
    return reply(res, { error: "Review not found" }, 404);
  }

  const deletedReview = reviews[reviewIndex];

  // Удаляем отзыв из массива reviews
  reviews.splice(reviewIndex, 1);

  // Удаляем ID отзыва из restaurant.reviews
  restaurants.forEach((restaurant) => {
    restaurant.reviews = restaurant.reviews.filter(
      (id) => id !== reviewId
    );
  });

  reply(res, deletedReview);
});


module.exports = router;
