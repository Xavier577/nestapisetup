export const zeroInfinity = (computation: number) => {
  if (computation === Infinity || computation === -Infinity) {
    return 0;
  }
  return computation;
};
