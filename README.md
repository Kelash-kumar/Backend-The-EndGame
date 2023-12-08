# Backend-The-EndGame
---
# Node.js and Express.js Basics

## Node.js Basics:

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

## Express.js Basics:

- **Express.js:**
  - A framework that simplifies server-side features, providing easy access to functionalities similar to the http module in Node.js.

- **Routing:**
  - Define routes using the syntax `app.METHOD(PATH, HANDLER)`. Example: `app.get('/profile', getHandler)`.

- **Dynamic Routing:**
  - Express supports dynamic routing using parameters. Example: `app.get('/profile/:username', getHandler)`, where `:username` is accessed using `req.params.username`.

## EJS Setup:

- **EJS (Embedded JavaScript):**
  - A template engine for Express.js that allows dynamic HTML page generation.

- **Setup:**
  1. Install EJS: `npm i ejs`.
  2. Configure EJS in your Express app: `app.set('view engine', 'ejs')`.
  3. Create a "views" folder.
  4. Create EJS files inside the "views" folder.
  5. Use the `render` function to render the EJS files. Reference files within the "views" folder, omitting the ".ejs" extension.

## Static Files:

- Static files, such as stylesheets, frontend JavaScript, and images, can be served using Express.js.
  - Place images in `public/images`.
  - Stylesheets in `public/stylesheets`.
  - JavaScript files in `public/javascripts`.

## Error Handling:

- Error handling is crucial for building robust applications. Implement appropriate error-handling mechanisms in your Express.js app.

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

