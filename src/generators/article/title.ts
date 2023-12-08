import { GeneratorLength } from '../../types/common';

/**
 * Generates a random article title based on the specified length.
 *
 * @param {GeneratorLength} [titleLength=GeneratorLength.Medium] The length of the article title.
 * @return {*}  {string}  The generated article title.
 */
export const generateArticleTitle = (
  titleLength: GeneratorLength = GeneratorLength.Medium,
): string => {
  const TOPICS = [
    'The Future of Technology',
    'Exploring Space Exploration',
    'Healthy Living Tips',
    'Artificial Intelligence in Everyday Life',
    'Global Environmental Challenges',
    'The Power of Mindfulness',
    'Innovations in Renewable Energy',
    'Culinary Adventures Around the World',
    'Advancements in Medical Science',
    'The Impact of Social Media on Society',
  ];
  const PREFIXES = [
    'Unveiling',
    'Discovering',
    'Navigating',
    'Mastering',
    'Understanding',
    'Unlocking',
    'Revolutionizing',
    'Embracing',
    'Championing',
    'Exploring',
  ];
  const SUFFIXES = [
    ': A Deep Dive',
    'and Its Implications',
    'for a Sustainable Future',
    'in the 21st Century',
    'Through the Lens of Science',
    'for a Better Tomorrow',
    'and Beyond',
    'in the Modern Age',
    'in Focus',
    'for a Changing World',
  ];

  const randomTopic = () => TOPICS[Math.floor(Math.random() * TOPICS.length)];
  const randomPrefix = () =>
    PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
  const randomSuffix = () =>
    SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];

  let articleTitle = '';

  switch (titleLength) {
    case GeneratorLength.Short:
      articleTitle = `${randomPrefix()} ${randomTopic()}`;
      break;
    case GeneratorLength.Medium:
      articleTitle = `${randomPrefix()} ${randomTopic()} ${randomSuffix()}`;
      break;
    case GeneratorLength.Long:
      articleTitle = `${randomPrefix()} ${randomTopic()} ${randomSuffix()} | ${randomTopic()}`;
      break;
    case GeneratorLength.ExtraLong:
      articleTitle = `${randomPrefix()} ${randomTopic()} ${randomSuffix()} | ${randomPrefix()} ${randomTopic()} ${randomSuffix()}`;
      break;
    default:
      articleTitle = `${randomPrefix()} ${randomTopic()} ${randomSuffix()}`;
  }

  return articleTitle;
};
