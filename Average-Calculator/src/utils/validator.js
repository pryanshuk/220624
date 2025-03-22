
/**
 * Validates input array of numbers
 * @param {any} numbers - Input to validate
 * @returns {string|null} - Error message or null if valid
 */
exports.validateNumbers = (numbers) => {
    // Check if numbers is defined
    if (!numbers) {
      return 'Numbers array is required';
    }
    
    // Check if numbers is an array
    if (!Array.isArray(numbers)) {
      return 'Input must be an array of numbers';
    }
    
    // Check if array is empty
    if (numbers.length === 0) {
      return 'Array cannot be empty';
    }
    
    // Check if all elements are numbers
    for (const num of numbers) {
      if (typeof num !== 'number' || isNaN(num)) {
        return 'All elements must be valid numbers';
      }
    }
    
    // Input is valid
    return null;
  };