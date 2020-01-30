exports.fieldValidate = async function(obj, fields) {
  return await new Promise((resolve, reject) => {
    if (!obj || obj.length <= 0) {
      reject({
        valid: false,
        error: "Object undefined"
      });
    } else if (!fields || fields.length <= 0) {
      reject({
        valid: false,
        error: "Model undefined"
      });
    } else {
      fields.forEach(function(el, i, array) {
        if (!obj.hasOwnProperty(el)) {
          reject({
            valid: false,
            error: `Error, can not find validation: ${el}`
          });
        }
        if (i === array.length - 1) {
          resolve({
            valid: true,
            error: false
          });
        }
      });
    }
  });
};
