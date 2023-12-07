import { GeneratorLength } from '../../types/common';
import { randomGeneratorLength } from '../common/random';
import { generateArticleParagraph } from './paragraph';

/**
 * Generates the article body using the paragraph generator.
 *
 * @param {GeneratorLength} [paragraphLength=GeneratorLength.Medium] The length of the paragraph to generate.
 * @return {*}  {string} The generated body.
 */
export const generateArticleBody = (
  articleLength: GeneratorLength = GeneratorLength.Medium,
): string[] => {
  let body: string[] = [];

  const paragraphs = (totalParagraphs: number) => {
    for (let i = 0; i < totalParagraphs; i++) {
      body.push(generateArticleParagraph(randomGeneratorLength()));
    }
  };

  switch (articleLength) {
    case GeneratorLength.Short:
      paragraphs(3);
      break;
    case GeneratorLength.Medium:
      paragraphs(5);
      break;
    case GeneratorLength.Long:
      paragraphs(9);
      break;
    case GeneratorLength.ExtraLong:
      paragraphs(15);
      break;
    default:
      paragraphs(5);
  }

  return body;
};
