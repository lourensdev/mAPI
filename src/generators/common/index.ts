import { GeneratorLength } from '../../types/common';
import { generateUuid } from './id';
import { getPlaceholderImageUrl } from './image';
import { randomGeneratorLength } from './random';

export namespace Common {
  export function ImageUrl(width?: number, height?: number): string {
    return getPlaceholderImageUrl(width, height);
  }
  export function RandomLength(): GeneratorLength {
    return randomGeneratorLength();
  }
  export function Boolean(): boolean {
    return Math.random() >= 0.5;
  }
  export function UUID(isNumber?: boolean): string | number {
    return generateUuid(isNumber);
  }
}
