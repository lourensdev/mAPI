import { GeneratorLength } from '../../types/common';

/**
 * Generates a paragraph for an article.
 *
 * @param {GeneratorLength} [paragraphLength=GeneratorLength.Medium] The length of the paragraph to generate.
 * @return {*}  {string} The generated paragraph.
 */
export const generateArticleParagraph = (
  paragraphLength: GeneratorLength = GeneratorLength.Medium,
): string => {
  const sentences = [
    'Technology continues to evolve at a rapid pace, shaping the way we live and work.',
    'In recent years, artificial intelligence has gained prominence, revolutionizing various industries.',
    'Advancements in medical science have led to breakthroughs in treatment and improved healthcare outcomes.',
    'The exploration of space remains a fascinating endeavor, unlocking mysteries beyond our planet.',
    'As concerns about climate change grow, there is a renewed focus on sustainable practices and renewable energy sources.',
    'In the digital age, data has become a valuable asset, driving decision-making processes across different sectors.',
    'The intersection of technology and creativity is giving rise to new forms of art and expression.',
    'Global connectivity has transformed the way we communicate, fostering collaboration and cultural exchange.',
    'Emerging technologies such as blockchain and 5G are poised to reshape our economic and social landscapes.',
    'Understanding the impact of automation on jobs is a critical aspect of navigating the future of work.',
  ];

  // Randomize sentence order
  sentences.sort(() => Math.random() - 0.5);

  let paragraph = '';

  switch (paragraphLength) {
    case GeneratorLength.Short:
      paragraph = sentences.slice(0, 2).join(' ');
      break;
    case GeneratorLength.Medium:
      paragraph = sentences.slice(0, 3).join(' ');
      break;
    case GeneratorLength.Long:
      paragraph = sentences.slice(0, 4).join(' ');
      break;
    case GeneratorLength.ExtraLong:
      paragraph = sentences.join(' ');
      break;
    default:
      paragraph = sentences.slice(0, 3).join(' ');
  }

  return paragraph;
};
