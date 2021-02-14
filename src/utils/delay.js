export const getDelay = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};
