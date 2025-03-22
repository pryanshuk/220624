# Average Calculator API

A simple RESTful API that calculates the average of a list of numbers.

## API Endpoints

### Calculate Average

**URL:** `/api/calculator/average`  
**Method:** `POST`  
**Request Body:**
```json
{
  "numbers": [1, 2, 3, 4, 5]
}