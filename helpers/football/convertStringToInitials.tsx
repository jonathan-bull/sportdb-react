/**
 * Converts an incoming string to initials.
 * Used in instances where we are missing an image.
 *
 * @param {string} input The string to convert.
 *
 * @return {string} The initials of the incoming string.
 */
export const convertStringToInitials = (input: string): string => {
  // Replace '-' with ' ' so it is treated as a space. Convert to upper case and remove any instance of 'the'.
  const words = input.toUpperCase().replace('-', ' ').replace('THE', '').split(' ');

  // Protected strings are passed through without filtering.
  const upperCaseWords = input.replace('-', ' ').replace('the', '').split(' ');
  const protectedWords = upperCaseWords.filter(
    (upperWord) => upperWord === upperWord.toUpperCase() && upperWord !== upperWord.toLowerCase()
  );

  const initials = words.map((word) => {
    if (protectedWords.includes(word) === true) {
      return word.toUpperCase();
    }

    return word.charAt(0).toUpperCase();
  });

  return initials.join('');
};
