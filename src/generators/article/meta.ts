const CATEGORY_TAGS = [
  'Technology',
  'Science',
  'Health',
  'Environment',
  'Travel',
  'Food',
  'Business',
  'Culture',
  'Education',
  'Sports',
  'Innovation',
  'Art',
  'Fitness',
  'Entertainment',
];

/**
 * Generates a random selection of article meta tags
 *
 * @param {number} [total=1] The total number of tags to generate.
 * @return {*}  {string[]}
 */
export const generateArticleMeta = (total: number = 1): string[] => {
  // Shuffle the tags array to get a random order
  const shuffledTags = CATEGORY_TAGS.sort(() => Math.random() - 0.5);

  // Choose a random number of tags (up to the specified limit)
  const selectedTags = shuffledTags.slice(
    0,
    Math.min(total, CATEGORY_TAGS.length),
  );

  return selectedTags;
};
