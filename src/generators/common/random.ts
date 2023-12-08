import { GeneratorLength } from '../../types/common';

/**
 * Generates a random GeneratorLength value for more dynamic content.
 * @returns {GeneratorLength} A random GeneratorLength value.
 */
export const randomGeneratorLength = (): GeneratorLength => {
  const enumValues = Object.values(GeneratorLength);
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
};
