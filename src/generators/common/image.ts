/**
 * Get a placeholder image URL from PlaceBeard
 *
 * @param {number} [width=500]
 * @param {number} [height=500]
 * @return {*}
 */
export const getPlaceholderImageUrl = (
  width: number = 500,
  height: number = 500,
) => {
  // Construct the URL for the PlaceBeard API
  const apiUrl = `https://placebeard.it/${width}/${height}`;

  // Return the API URL
  return apiUrl;
};
