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
```

**Success Response:**
```json
{
  "success": true,
  "average": 3,
  "count": 5
}
```

**Error Response:**
```json
{
  "error": "Input must be an array of numbers"
}
```

## API Testing Screenshots

### Test Case 1: Valid Input

![Valid Input Response](./src/screenshots/testCase1.png)

### Test Case 2: Empty Array

![Empty Array Request](./src/screenshots/emptyArray.png)


### Test Case 3: Invalid Input

![Invalid Input Request](./src/screenshots/InvalidInput.png)



## Setup and Run

1. Install dependencies:
```
npm install
```

2. Start the server:
```
node src/app.js
```

The server will run on port 3000 by default.

