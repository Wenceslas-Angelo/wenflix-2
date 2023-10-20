export const ratingStar = (rating: number) => {
  const stars = [];
  const roundedRating = Math.round(rating / 2);
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push('full');
    } else if (i - 0.5 === rating) {
      stars.push('half');
    } else {
      stars.push('none');
    }
  }
  return stars;
};
