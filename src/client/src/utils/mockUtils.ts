export const mockImageUrl = ({
  width = 1280,
  height = 720,
}: {
  width?: number;
  height?: number;
} = {}) => {
  const random = Math.random();
  return `https://unsplash.it/${width}/${height}/?&random&v=${random}`;
};
