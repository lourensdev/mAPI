import { Article } from './generators/article';
import { Common } from './generators/common';
import { mAPIOptions } from './types/common';
import { Util } from './utils';

export const mAPI = (options: mAPIOptions) => {
  return options;
};

console.log(
  mAPI({
    id: Common.UUID(true),
    active: Common.Boolean(),
    title: Article.Title(),
    blurb: Article.Blurb(),
    paragraph: Article.Paragraph(),
    meta: Article.Meta(),
    body: Article.Body(),
    looped: Util.Loop(() => Article.Meta(), 5),
  }),
);
