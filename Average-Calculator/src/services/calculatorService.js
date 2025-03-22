// src/services/calculatorService.js

/**
 * Calculate the average of an array of numbers
 * @param {number[]} numbers - Array of numbers to average
 * @returns {number} - The calculated average
 */
exports.calculateAverage = (numbers) => {
    // Guard against empty array
    if (numbers.length === 0) {
      return 0;
    }
    
    // Calculate sum using reduce (without external libraries)
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    
    // Calculate and return average
    return sum / numbers.length;
  };