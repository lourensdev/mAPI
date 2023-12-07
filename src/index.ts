import { Article } from './generators/article';
import { Common } from './generators/common';
import { mAPIAsyncOptions, mAPIStaticOptions } from './types/common';
import { Util } from './utils';

export const smAPI = (options: mAPIStaticOptions): mAPIStaticOptions => {
  return options;
};

export const mAPI = async (
  options: mAPIAsyncOptions,
): Promise<mAPIStaticOptions> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (options.fail) {
        reject('Failed to generate data');
      } else {
        // Filter out the delay and fail options
        const { delay, fail, ...restOptions } = options;
        resolve(restOptions);
      }
    }, options.delay);
  });
};

const staticCall = smAPI({
  id: Common.UUID(true),
  active: Common.Boolean(),
  title: Article.Title(),
  blurb: Article.Blurb(),
  paragraph: Article.Paragraph(),
  meta: Article.Meta(),
  body: Article.Body(),
  looped: Util.Loop(() => Article.Meta(), 5),
});

const asyncCall = mAPI({
  delay: 1000,
  id: Common.UUID(true),
  active: Common.Boolean(),
  title: Article.Title(),
  blurb: Article.Blurb(),
  paragraph: Article.Paragraph(),
  meta: Article.Meta(),
  body: Article.Body(),
  looped: Util.Loop(() => Article.Meta(), 5),
});
