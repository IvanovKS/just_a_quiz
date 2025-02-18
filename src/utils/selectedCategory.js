const selectedCategory = (string) => {
  if (typeof string !== 'string') {
    return 21;
  }
  switch (string.toLowerCase()) {
    case 'sports':
      return 21;
    case 'animals':
      return 27;
    case 'art':
      return 25;
    default:
      return 21;
  }
};

export default selectedCategory;
