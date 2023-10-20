export const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }
  const lastSpace = text.lastIndexOf(' ', limit);
  const textTruncate = text.substring(0, lastSpace) + '...';
  return textTruncate;
};
