import { mAPIAsyncOptions, mAPIStaticOptions } from './types/common';

/**
 * Static mock API call
 *
 * e.g:
 * const staticCall = smAPI({
 *   id: Common.UUID(true),
 *   active: Common.Boolean(),
 *   title: Article.Title(),
 *   blurb: Article.Blurb(),
 *   paragraph: Article.Paragraph(),
 *   meta: Article.Meta(),
 *   body: Article.Body(),
 *   looped: Util.Loop(() => Article.Meta(), 5),
 * });
 *
 * @param {mAPIStaticOptions} options
 * @return {*}  {mAPIStaticOptions}
 */
export const smAPI = (options: mAPIStaticOptions): mAPIStaticOptions => {
  return options;
};

/**
 * Asyncronous mock API call
 *
 * e.g:
 * const asyncCall = mAPI({
 *   delay: 1000,
 *   id: Common.UUID(true),
 *   active: Common.Boolean(),
 *   title: Article.Title(),
 *   blurb: Article.Blurb(),
 *   paragraph: Article.Paragraph(),
 *   meta: Article.Meta(),
 *   body: Article.Body(),
 *   looped: Util.Loop(() => Article.Meta(), 5),
 * });
 *
 * @param {mAPIAsyncOptions} options
 * @return {*}  {Promise<mAPIStaticOptions>}
 */
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
