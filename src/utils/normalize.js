export const arrayToObject = (array) =>
  array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
