export const normalizeArray = (array) => {
  return {
    ids: array.map(({ id }) => id),
    entities: array.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {}),
  };
};
