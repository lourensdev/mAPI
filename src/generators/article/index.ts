import { generateArticleTitle } from './title';
import { generateArticleBlurb } from './blurb';
import { generateArticleBody } from './body';
import { generateArticleMeta } from './meta';
import { getPlaceholderImageUrl } from '../common/image';

export type Article = {
  title: string;
  image: string;
  blurb: string;
  categories?: string[];
  tags?: string[];
  body: string[];
};

/**
 * Generates a single article.
 *
 * @return {*}
 */
export const generateArticle = (): Article => {
  const tagsAmount = Math.floor(Math.random() * 5) + 1;
  return {
    title: generateArticleTitle(),
    image: getPlaceholderImageUrl(),
    blurb: generateArticleBlurb(),
    categories: generateArticleMeta(),
    tags: generateArticleMeta(tagsAmount),
    body: generateArticleBody(),
  };
};

/**
 * Generates a specified number of articles.
 *
 * @param {number} [totalArticles=10]
 * @return {*}  {Article[]}
 */
export const generateArticles = (totalArticles: number = 10): Article[] => {
  let articles: Article[] = [];

  for (let i = 0; i < totalArticles; i++) {
    articles.push(generateArticle());
  }

  return articles;
};
