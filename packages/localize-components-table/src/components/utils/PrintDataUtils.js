export const TIME_TYPE = {
  DAYS: 'days',
  HOURS: 'hours',
  MINUTES: 'minutes',
};

export const getSecondsTimeConvertedToTargetTime = (
  seconds,
  targetType = TIME_TYPE.MINUTES,
) => {
  if (!Number.isInteger(seconds)) {
    return seconds;
  }
  // 1h
  switch (targetType) {
    case TIME_TYPE.DAYS:
      return seconds / (3600 * 24);
    case TIME_TYPE.HOURS:
      return seconds / 3600;
    default:
      return seconds / 60;
  }
};

/* ***************************
  Table Resizing Methods
*************************** */
const REGEX = {
  NUMBER_WITH_COMMA: /\B(?=(\d{3})+(?!\d))/gim,
  NUMBER: /\d*/gim,
  SIZE: /[xpemvwrh%]*$/gim,
};

export const getNumberWithCommas = (number) => {
  if (Array.isArray(number)) {
    number.sort((a, b) => a - b);
    return number.join(' / ').toString().replace(REGEX.NUMBER_WITH_COMMA, ',');
  } else if (!Number.isInteger(number) || !number) {
    return number;
  }
  return number.toString().replace(REGEX.NUMBER_WITH_COMMA, ',');
};
