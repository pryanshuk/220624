
const calculatorService = require('../services/calculatorService');
const validator = require('../utils/validator');

exports.calculateAverage = (req, res) => {
  try {
    const { numbers } = req.body;
    
    // Validate input
    const validationError = validator.validateNumbers(numbers);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }
    
    // Calculate average
    const result = calculatorService.calculateAverage(numbers);
    
    // Return result
    return res.status(200).json({
      success: true,
      average: result,
      count: numbers.length
    });
  } catch (error) {
    console.error('Error calculating average:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error'
    });
  }
};