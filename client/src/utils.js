/* eslint-disable import/prefer-default-export */
// Empty object checker
export const emptyChecker = (obj) => {
    let isDataEmpty = true;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) isDataEmpty = false;
    }
    return isDataEmpty;
  };
  