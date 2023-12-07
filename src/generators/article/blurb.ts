import { GeneratorLength } from '../../types/common';

/**
 * Generates an article blurb based on the specified biased length.
 *
 * @param {GeneratorLength} [biasedLength=GeneratorLength.Medium]
 * @return {*}  {string}
 */
export const generateArticleBlurb = (
  biasedLength: GeneratorLength = GeneratorLength.Medium,
): string => {
  const adjectives = [
    'Intriguing',
    'Insightful',
    'Captivating',
    'Provocative',
    'Fascinating',
    'Compelling',
    'Thought-Provoking',
    'Enlightening',
    'Engaging',
    'Inspirational',
  ];

  const verbs = [
    'explores',
    'examines',
    'discusses',
    'reveals',
    'uncovers',
    'investigates',
    'highlights',
    'addresses',
    'spotlights',
    'analyzes',
  ];

  const subjects = [
    'the latest trends',
    'key challenges',
    'innovative solutions',
    'remarkable discoveries',
    'critical issues',
    'emerging technologies',
    'unique perspectives',
    'cutting-edge research',
    'important developments',
    'transformative ideas',
  ];

  const connectors = [
    ', offering',
    ', providing',
    ', delivering',
    ', presenting',
    ', giving',
    ', supplying',
    ', furnishing',
    ', yielding',
    ', bringing',
    ', imparting',
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const randomConnector =
    connectors[Math.floor(Math.random() * connectors.length)];

  let blurb = '';

  switch (biasedLength) {
    case GeneratorLength.Short:
      blurb = `${randomAdjective} ${randomVerb} ${randomSubject}.`;
      break;
    case GeneratorLength.Medium:
      blurb = `${randomAdjective} article that ${randomVerb} ${randomSubject}${randomConnector} insights and explores its impact on various aspects.`;
      break;
    case GeneratorLength.Long:
      blurb = `${randomAdjective} article that ${randomVerb} ${randomSubject}${randomConnector} insights and explores its impact on various aspects of our lives, providing a comprehensive look into the subject matter.`;
      break;
    case GeneratorLength.ExtraLong:
      blurb = `${randomAdjective} article that ${randomVerb} ${randomSubject}${randomConnector} insights and explores its impact on various aspects of our lives, providing a comprehensive look into the subject matter with in-depth analysis and detailed discussions.`;
      break;
    default:
      blurb = `${randomAdjective} article that ${randomVerb} ${randomSubject}${randomConnector} insights and explores its impact on various aspects of our lives, providing a comprehensive look into the subject matter.`;
  }

  return blurb;
};
