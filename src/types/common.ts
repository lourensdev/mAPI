import { Article } from '../generators/article';

export enum GeneratorLength {
  Short = 'short',
  Medium = 'medium',
  Long = 'long',
  ExtraLong = 'extra long',
}

export interface mAPIStaticOptions {
  [key: string]: any;
}

export interface mAPIAsyncOptions extends mAPIStaticOptions {
  delay: number; // Milliseconds
  fail?: boolean;
}
