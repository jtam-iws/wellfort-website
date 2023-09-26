export const isVertical = (imageSide: BlockSide) => {
  return imageSide === 'top' || imageSide === 'bottom';
};

export const isImageFirst = (imageSide: BlockSide) => {
  return imageSide === 'top' || imageSide === 'left';
};
