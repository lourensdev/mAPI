/**
 * Generate content by looping a callback function for a set amount of times.
 * Used to create quick lists of similar content.
 *
 * @param {*} callback
 * @param {number} [total=1]
 * @return {*}
 */
export const loopContent = (callback: any, total: number = 1) => {
  const results = [];
  for (let i = 0; i < total; i++) {
    results.push(callback());
  }
  return results;
};

export namespace Util {
  export function Loop(callback: any, total: number = 1) {
    return loopContent(callback, total);
  }
}
