 export const uniqueIdGen = () => {
  let id = Date.now();
  // eslint-disable-next-line no-return-assign
  return () => id += 1;
};
