import { Article } from '../generators/article';

export enum GeneratorLength {
  Short = 'short',
  Medium = 'medium',
  Long = 'long',
  ExtraLong = 'extra long',
}

export interface mAPIOptions {
  [key: string]: any;
}
