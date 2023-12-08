# Backend-The-EndGame  🚀️
---
## Node.js and Express.js EndGame

### Node.js Basics:
#Node.js Basics:
Node.js: Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to execute JavaScript code outside of a web browser, enabling server-side development.
### Key Features:
-Asynchronous and event-driven.<br/>
-Single-threaded, non-blocking I/O operations.<br/>
-Ideal for building scalable network applications.
- **npm (Node Package Manager):**
  - The package manager that provides a wide range of packages for the Node.js ecosystem.

- **Running a Node.js App:**
  - Execute the command `node app-name` to run a Node.js application.

- **Nodemon:**
  - A package that allows continuous server running. Install it using `npx nodemon nodeAppName`. It automatically restarts the server on file changes.

- **Routes:**
  - **GET routes:**
    - Data is shown in the URL.
  - **POST routes:**
    - Data is not shown in the URL at input time.

- **Middleware:**
  - Middleware functions handle requests and responses in Express. They are executed between the app's request and the server's response. Example: `app.use(req, res, next)`.
  - <h5>follow the link to know more about middleware <h5/>

## MY First Node App :
  we are going to code the very first basic node app <br/> we will learn how to create the server.
  Certainly! To create a simple Node.js application, follow these steps:

1. **Install Node.js:**
   Make sure you have Node.js installed on your machine. You can download it from the official website: [Node.js](https://nodejs.org/).

2. **Create a Project Directory:**
   Open your terminal and create a new directory for your Node.js application. Navigate to the directory using the `cd` command.

   ```bash
   mkdir my-node-app
   cd my-node-app
   ```

3. **Initialize a Node.js Project:**
   Run the following command to initialize a new Node.js project. This will create a `package.json` file.

   ```bash
   npm init -y
   ```

4. **Create the Main File:**
   Create a file named `app.js` (or any other name you prefer) in your project directory. This will be your main Node.js file.

   ```javascript
   // app.js

   // Load the HTTP module to create an HTTP server.
   const http = require('http');

   // Configure HTTP server to respond with "Hello, World!" to all requests.
   const server = http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end('Hello, World!\n');
   });

   // Listen on port 3000 and IP address 127.0.0.1.
   const port = 3000;
   const ip = '127.0.0.1';
   server.listen(port, ip, () => {
     console.log(`Server running at http://${ip}:${port}/`);
   });
   ```

5. **Run Your Node.js App:**
   In your terminal, run the following command to start your Node.js application:

   ```bash
   node app.js
   ```

   You should see the message "Server running at http://127.0.0.1:3000/".

6. **Access Your App:**
   Open a web browser and go to `http://127.0.0.1:3000/` or `http://localhost:3000/`. <br/>
   Congratulations! You've just created a simple Node.js application. 


## Express.js Basics:

## 1  **Express.js:**
  - A framework that simplifies server-side features, providing easy access to functionalities similar to the http module in Node.js.

## 2 **Routing:**
 Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)
Where:

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.

- **Static Routing:**
  - Express supports Static routing using parameters. Example: `app.get('/profile/username', getHandler)`. it wil give us all the user' name.

- **Dynamic Routing:**
  - Express supports dynamic routing using parameters. Example: `app.get('/profile/:username', getHandler)`, where `:username` is accessed using `req.params.username`.It use to find the particular user information/data.

### MY First Express App:
Now we use the express fram work to create the `server` which we did with `HTTP` in node js app but ultimatly! express use the http module to create the serve on backend. 

 ## Below are the steps to create a simple Node.js application using Express:

1. **Install Express:**
   Open your terminal in the project directory and run the following command to install Express using npm.

   ```bash
   npm install express
   ```

2. **Update `app.js` to Use Express:**
   Modify your `app.js` file to use Express and create a basic server.

   ```javascript
   // app.js

   // Import the express module
   const express = require('express');
   // Create an instance of the express application
   const app = express();

   // Define a route for the root URL
   app.get('/', (req, res) => {
     res.send('Hello, Express!');
   });

   // Specify the port for the server to listen on
   const port = 3000;
   // Start the server
   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}/`);
   });
   ```

3. **Run Your Express App:**
   In the terminal, run the following command to start your Express application:

   ```bash
   node app.js
   ```

   Visit `http://localhost:3000/` in your web browser to see the "Hello, Express!" message.

This simple example introduces you to the basics of using Express. Here are some key points:

- **Express Application:**
  - Create an instance of the Express application using `const app = express();`.

- **Routing with Express:**
  - Define routes using `app.get()`, `app.post()`, etc., to handle different HTTP methods.
  - In the example, a route for the root URL (`/`) is defined to respond with "Hello, Express!".

- **Listening on a Port:**
  - Use `app.listen()` to start the server and specify the port.
  - The server will now listen for incoming requests on the specified port.

As you become more familiar with Express, you can explore features like middleware, template engines, and more advanced routing capabilities. Express provides a powerful foundation for building web applications in Node.js.

### Middleware in Express:
Middleware functions in Express have access to the request, response, and the next middleware function in the application’s request-response cycle. They can perform various tasks such as modifying request and response objects, ending the request-response cycle, or calling the next middleware in the stack.

Here's an example of a simple middleware that logs the request method and URL:
```
javascript
Copy code
// Middleware function
const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware in the stack
};

// Use the middleware in your Express app
app.use(logMiddleware);
```
In this example, `app.use()` is used to apply the middleware globally to all routes. You can also apply middleware to specific routes using  `app.use('/specific-route', logMiddleware)`.

## 3 Template Engines in Express:
Template engines allow you to generate HTML dynamically by embedding values into the HTML. Popular template engines for Express include EJS, Handlebars, Pug, and Mustache. Here's an example using the EJS template engine:
## EJS Setup:
EJS (Embedded JavaScript) is a template engine for Express.js that allows you to generate dynamic HTML pages.
creating the ejs files with `.ejs` extension.
- **EJS (Embedded JavaScript):**
  - A template engine for Express.js that allows dynamic HTML page generation.

- **Setup:**
  1. Install EJS: `npm i ejs`.
  2. Configure EJS in your Express app: `app.set('view engine', 'ejs')`.
  3. Create a "views" folder.
  4. Create EJS files inside the "views" folder.
  5. Use the `render` function to render the EJS files. Reference files within the "views" folder, omitting the ".ejs" extension.

###  First, install the EJS package:

bash
Copy code
npm install ejs
Then, configure Express to use EJS:

javascript
Copy code
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Render a dynamic view
app.get('/dynamic', (req, res) => {
  const data = { message: 'Hello, Dynamic World!' };
  res.render('dynamic', data);
});

Create a file named dynamic.ejs in a folder named views :
<br/> file location be like`views/dynamics.ejs`.

html
Copy code
<!-- views/dynamic.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Page</title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>

## 4 Static Files:
- Static files, such as stylesheets, frontend JavaScript, and images, can be served using Express.js.
  - Place images in `public/images`.
  - Stylesheets in `public/stylesheets`.
  - JavaScript files in `public/javascripts`.
  <strong>Example:<strong/>if we want to add css `dynamic.css` file in our above `dynamic.ejs` file then we create our css file in `public/stylesheets` directory and call this file in above `dynamic.ejs` file , same as we use css in out html file.

 ## 5 Error Handling:

- Error handling is crucial for building robust applications. Implement appropriate error-handling mechanisms in your Express.js app.

Error handling is a crucial aspect of writing robust and reliable Node.js backend applications. Here's a guide on error handling in Node.js:

### 1. **Try-Catch Blocks:**
   - Use try-catch blocks to handle synchronous errors within your code.
   - Example:

     ```javascript
     try {
       // Your code that may throw an error
     } catch (error) {
       // Handle the error here
       console.error(error);
     }
     ```

### 2. **Promises:**
   - For asynchronous code, use promises and handle errors in the `catch` block.
   - Example:

     ```javascript
     someAsyncFunction()
       .then(result => {
         // Handle success
       })
       .catch(error => {
         // Handle error
         console.error(error);
       });
     ```

### 3. **Async/Await:**
   - With async/await syntax, you can handle asynchronous errors in a more synchronous-looking way.
   - Example:

     ```javascript
     async function fetchData() {
       try {
         const result = await someAsyncFunction();
         // Handle success
       } catch (error) {
         // Handle error
         console.error(error);
       }
     }

     fetchData();
     ```

### 4. **Event Emitters:**
   - Utilize event emitters for handling errors in certain scenarios.
   - Example:

     ```javascript
     const EventEmitter = require('events');
     const emitter = new EventEmitter();

     emitter.on('error', (error) => {
       console.error(error);
     });

     // Emit an error
     emitter.emit('error', new Error('An example error'));
     ```

### 5. **Express.js Error Handling:**
   - In an Express.js application, you can use middleware to handle errors.
   - Example:

     ```javascript
     const express = require('express');
     const app = express();

     // Your routes and middleware

     // Error handling middleware
     app.use((err, req, res, next) => {
       console.error(err.stack);
       res.status(500).send('Something went wrong!');
     });
     ```

### 6. **Custom Error Classes:**
   - Create custom error classes to distinguish different types of errors and handle them accordingly.
   - Example:

     ```javascript
     class MyCustomError extends Error {
       constructor(message) {
         super(message);
         this.name = 'MyCustomError';
       }
     }

     try {
       throw new MyCustomError('This is a custom error');
     } catch (error) {
       if (error instanceof MyCustomError) {
         // Handle your custom error
       } else {
         // Handle other errors
       }
     }
     ```

### 7. **Logging:**
   - Always log errors to help with debugging and monitoring.
   - Example:

     ```javascript
     try {
       // Your code
     } catch (error) {
       console.error('An error occurred:', error);
     }
     ```

### 8. **Testing:**
   - Write tests to ensure that your error-handling code works as expected.

Remember that proper error handling not only ensures your application is more robust but also aids in debugging and maintaining the codebase. Tailor your error-handling strategy to the specific needs and requirements of your application.
## Additional Points:

- **Body Parser:**
  - Middleware for handling POST requests and parsing incoming data. Install using `npm install body-parser`.

- **HTTP Methods:**
  - Express supports other HTTP methods in addition to GET and POST.

- **Template Variables:**
  - Pass variables to EJS templates using the `render` function.

- **Express Router:**
  - Use the Express Router to modularize routes as your application grows.
It seems like you've provided a mix of information related to setting up an Express application, MongoDB integration, flash messages, sessions, and cookies. Let me organize and enhance the information for better clarity.

### Express Application Setup:

1. **Install Express Generator:**
   ```bash
   npm install -g express-generator
   ```

2. **Create an Express App with EJS as the View Engine:**
   ```bash
   express appname --view=ejs
   cd appname
   npm install
   ```

### MongoDB Integration:

1. **Install MongoDB:**
   Make sure you have MongoDB installed on your machine.

2. **Database Setup:**
   - **db Connection (e.g., in `app.js`):**
     ```javascript
     const mongoose = require('mongoose');
     mongoose.connect('mongodb://localhost:27017/dbname', { useNewUrlParser: true, useUnifiedTopology: true });
     ```

   - **Model Setup (e.g., in `models/user.js`):**
     ```javascript
     const mongoose = require('mongoose');
     const userSchema = new mongoose.Schema({
       // Define your schema fields here
     });
     const User = mongoose.model('User', userSchema);
     module.exports = User;
     ```

### Sessions:
 Sessions allow you to store user-specific information on the server between requests. It helps maintain state and user data throughout their interaction with the application.
 
## Usage:
Set session variables: req.session.username = 'example';
Read session variables: const username = req.session.username;
Delete session variables: delete req.session.username;

## Implementation:
Use the express-session middleware in Express.js to enable sessions.
Example:
javascript
Copy code
const session = require('express-session');
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

1. **Install Express-Session:**
   ```bash
   npm install express-session
   ```

2. **Setup Sessions:**
   - In your main app file (e.g., `app.js`):
     ```javascript
     const session = require('express-session');
     app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
     ```

   - To set a session variable:
     ```javascript
     req.session.username = 'example';
     ```

   - To read a session variable:
     ```javascript
     const username = req.session.username;
     ```

   - To delete a session:
     ```javascript
     delete req.session.username;
     ```

### Cookies:
Cookies are small pieces of data sent from a server and stored on the client's browser. They are commonly used to store user preferences, authentication tokens, and other information.

## Usage:
Set a cookie: res.cookie('username', 'example');
Read a cookie: const username = req.cookies.username;
Delete a cookie: res.clearCookie('username');

## Implementation:
Use the cookie-parser middleware in Express.js to handle cookies.
Example:
javascript
Copy code
const cookieParser = require('cookie-parser');
app.use(cookieParser());

1. **Install Cookie-Parser:**
   ```bash
   npm install cookie-parser
   ```

2. **Setup Cookies:**

   - In your main app file (e.g., `app.js`):
     ```javascript
     const cookieParser = require('cookie-parser');
     app.use(cookieParser());
     ```

   - To set a cookie:
     ```javascript
     res.cookie('username', 'example');
     ```

   - To read a cookie:
     ```javascript
     const username = req.cookies.username;
     ```

   - To delete a cookie:
     ```javascript
     res.clearCookie('username');
     ```

### Flash Messages:
Flash messages are temporary messages that are displayed to users, often after a form submission or a specific action. They are typically used to convey success or error messages.

## Usage:
Create a flash message: req.flash('success', 'This is a success message');
Read a flash message: const successMessage = req.flash('success');
Flash messages are often used in combination with sessions to store temporary information.

## Implementation:
Use the connect-flash middleware in Express.js to enable flash messages.

## Example:
javascript
Copy code
const flash = require('connect-flash');
app.use(flash());

1. **Install Connect-Flash:**
   ```bash
   npm install connect-flash
   ```

2. **Setup Flash Messages:**
   
   - In your main app file (e.g., `app.js`):
     ```javascript
     const flash = require('connect-flash');
     app.use(flash());
     ```

   - In your route where you want to create a flash message (e.g., `routes/index.js`):
     ```javascript
     // Create flash
     req.flash('success', 'This is a success message');
     ```

   - In another route where you want to use the flash message:
     ```javascript
     // Read flash
     const successMessage = req.flash('success');
     ```

