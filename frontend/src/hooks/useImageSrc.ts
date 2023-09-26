const useImageSrc = (path: string): string => {
  let imgSrc = path;
  if (path.startsWith('/uploads/')) {
    imgSrc = `${process.env.GATSBY_API_URL || 'http://localhost:1337'}${path}`;
  }

  return imgSrc;
};

export default useImageSrc;
