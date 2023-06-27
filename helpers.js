function formatPrice(price) {
  // Store price in a variable that will return from the function
  let returnValue = price.toString();

  // Split price into two parts
  const parts = returnValue.split(".");

  // Add 0 to the first part if length is 1
  if (parts[0].length === 1) {
    returnValue = "0" + returnValue;
  }

  // Add 0 to the last part if length is 1
  if (parts[1].length === 1) {
    returnValue = returnValue + "0";
  }

  // Return padded value with 0
  return returnValue;
}

const serialize = function (data) {
  const obj = {};

  // Loop through all the key-value pairs in "data"
  for (let [key, value] of data) {
    // If the key already exists in "obj"
    if (obj[key] !== undefined) {
      // If the value of the key is not an array, convert it to an array
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      // Add the current value to the array
      obj[key].push(value);
    } else {
      // If the key does not exist in "obj", add it with its value
      obj[key] = value;
    }
  }

  return obj;
};

export { formatPrice, serialize };
