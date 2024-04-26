const express = require("express");                                   // Importing the express.js framework
const app = express();                                                // Creating an instance of the express application

const add = (num1, num2) => num1 + num2;                              // Defining an addition function
const sub = (num1, num2) => num1 - num2;                              // Defining a subtraction function
const multi = (num1, num2) => num1 * num2;                            // Defining a multiplication function
const div = (num1, num2) => {                                          // Defining a division function
    if (num2 === 0) {                                                  // Checking if the divisor is zero
        throw new Error("Division by zero error");                     // Throwing an error if division by zero is attempted
    }
    return num1 / num2;                                                // Returning the result of division
};

// Handling GET requests at the '/add' endpoint
app.get("/add", (req, res) => {
    try {                                                              // Beginning of error handling block
        const num1 = parseFloat(req.query.num1);                       // Parsing the first query parameter as a float
        const num2 = parseFloat(req.query.num2);                       // Parsing the second query parameter as a float
        if (isNaN(num1)) {                                            // Checking if num1 is not a number
            throw new Error("num1 parameter incorrectly defined");    // Throwing an error if num1 is not a number
        }
        if (isNaN(num2)) {                                            // Checking if num2 is not a number
            throw new Error("num2 parameter incorrectly defined");    // Throwing an error if num2 is not a number
        }
        const result = add(num1, num2);                                // Calling the add function with parsed numbers
        res.status(200).json({ statuscode: 200, data: result });       // Sending a JSON response with the result
    } catch (error) {                                                  // Catching and handling errors
        res.status(500).json({ statuscode: 500, msg: error.toString() });  // Sending a JSON error response with the error message
    }
});

// Handling GET requests at the '/sub' endpoint
app.get("/sub", (req, res) => {
    try {                                                              // Beginning of error handling block
        const num1 = parseFloat(req.query.num1);                       // Parsing the first query parameter as a float
        const num2 = parseFloat(req.query.num2);                       // Parsing the second query parameter as a float
        if (isNaN(num1)) {                                            // Checking if num1 is not a number
            throw new Error("num1 parameter incorrectly defined");    // Throwing an error if num1 is not a number
        }
        if (isNaN(num2)) {                                            // Checking if num2 is not a number
            throw new Error("num2 parameter incorrectly defined");    // Throwing an error if num2 is not a number
        }
        const result = sub(num1, num2);                                // Calling the sub function with parsed numbers
        res.status(200).json({ statuscode: 200, data: result });       // Sending a JSON response with the result
    } catch (error) {                                                  // Catching and handling errors
        res.status(500).json({ statuscode: 500, msg: error.toString() });  // Sending a JSON error response with the error message
    }
});

// Handling GET requests at the '/multi' endpoint
app.get("/multi", (req, res) => {
    try {                                                              // Beginning of error handling block
        const num1 = parseFloat(req.query.num1);                       // Parsing the first query parameter as a float
        const num2 = parseFloat(req.query.num2);                       // Parsing the second query parameter as a float
        if (isNaN(num1)) {                                            // Checking if num1 is not a number
            throw new Error("num1 parameter incorrectly defined");    // Throwing an error if num1 is not a number
        }
        if (isNaN(num2)) {                                            // Checking if num2 is not a number
            throw new Error("num2 parameter incorrectly defined");    // Throwing an error if num2 is not a number
        }
        const result = multi(num1, num2);                              // Calling the multi function with parsed numbers
        res.status(200).json({ statuscode: 200, data: result });       // Sending a JSON response with the result
    } catch (error) {                                                  // Catching and handling errors
        res.status(500).json({ statuscode: 500, msg: error.toString() });  // Sending a JSON error response with the error message
    }
});

// Handling GET requests at the '/div' endpoint
app.get("/div", (req, res) => {
    try {                                                              // Beginning of error handling block
        const num1 = parseFloat(req.query.num1);                       // Parsing the first query parameter as a float
        const num2 = parseFloat(req.query.num2);                       // Parsing the second query parameter as a float
        if (isNaN(num1)) {                                            // Checking if num1 is not a number
            throw new Error("num1 parameter incorrectly defined");    // Throwing an error if num1 is not a number
        }
        if (isNaN(num2) || num2 === 0) {                               // Checking if num2 is not a number or zero
            throw new Error("num2 parameter incorrectly defined");    // Throwing an error if num2 is not a number or zero
        }
        const result = div(num1, num2);                                // Calling the div function with parsed numbers
        res.status(200).json({ statuscode: 200, data: result });       // Sending a JSON response with the result
    } catch (error) {                                                  // Catching and handling errors
        res.status(500).json({ statuscode: 500, msg: error.toString() });  // Sending a JSON error response with the error message
    }
});

const port = 3040;                                                    // Setting the port number

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log("Server is listening on port " + port);                // Logging a message when the server starts
});
