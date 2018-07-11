exports.getMaxLength = (strings) => {
  try {
    let maxString = {};
    maxString.message = '';

    strings.forEach((string) => {
      if (string.message.length > maxString.message.length) {
        maxString = string;
      }
    });
    return maxString;
  } catch (err) {
    throw err;
  }
};
