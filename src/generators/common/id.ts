/**
 * Can generate a uuid string or a number.
 * e.g 12345 or 123e4567-e89b-12d3-a456-426614174000
 *
 * @param {boolean} [isNumber=false]
 * @return {*}
 */
export const generateUuid = (isNumber: boolean = false) => {
  if (isNumber) {
    // Return a number no bigger than 5 digits
    return Math.floor(10000 + Math.random() * 90000);
  }
  // Generate the uuid string
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    character => {
      const randomNumber = (Math.random() * 16) | 0;
      const hexDigit =
        character === 'x' ? randomNumber : (randomNumber & 0x3) | 0x8;
      return hexDigit.toString(16);
    },
  );
  return uuid;
};
