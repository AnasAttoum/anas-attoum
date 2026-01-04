export const animationSpeed = 0.4;

export const bulkChildrenAnimation = (index: number) =>
  index % 4 === 0 ? 1 : index % 4 === 1 ? 2 : index % 4 === 2 ? 3 : 4;
