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
  const ADJECTIVES = [
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

  const VERBS = [
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

  const SUBJECTS = [
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

  const CONNECTORS = [
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
    ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const randomVerb = VERBS[Math.floor(Math.random() * VERBS.length)];
  const randomSubject = SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)];
  const randomConnector =
    CONNECTORS[Math.floor(Math.random() * CONNECTORS.length)];

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
