import { GeneratorLength } from '../../types/common';
import { generateArticleBlurb } from './blurb';
import { generateArticleBody } from './body';
import { generateArticleMeta } from './meta';
import { generateArticleParagraph } from './paragraph';
import { generateArticleTitle } from './title';

/*
 * Article generators namespace
 */
export namespace Article {
  export function Title(length?: GeneratorLength): string {
    return generateArticleTitle(length);
  }
  export function Blurb(length?: GeneratorLength): string {
    return generateArticleBlurb(length);
  }
  export function Paragraph(length?: GeneratorLength): string {
    return generateArticleParagraph(length);
  }
  export function Meta(total?: number): string[] {
    return generateArticleMeta(total);
  }
  export function Body(length?: GeneratorLength): string[] {
    return generateArticleBody(length);
  }
}
