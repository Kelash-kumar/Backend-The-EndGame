# Backend-The-EndGame

## Node.js and Express.js EndGame

### Node.js Basics:
Node.js is a JavaScript runtime built on the V8 JavaScript engine, facilitating server-side development. It features:
- Asynchronous and event-driven architecture.
- Single-threaded, non-blocking I/O operations.
- Ideal for scalable network applications.
  
**npm (Node Package Manager):**
- Package manager providing a vast ecosystem of Node.js packages.

**Running a Node.js App:**
- Execute `node app-name` to run a Node.js application.

**Nodemon:**
- Auto-restarts the server on file changes. Install with `npx nodemon nodeAppName`.

**Routes:**
- **GET routes:**
  - Data shown in the URL.
- **POST routes:**
  - Data not shown in the URL during input.

**Middleware:**
- Functions handling requests and responses. Example: `app.use(req, res, next)`.

### Express.js Basics:

**Express.js:**
- Framework simplifying server-side features, akin to the http module in Node.js.

**Routing:**
- Define routes: `app.METHOD(PATH, HANDLER)`. Example: `app.get('/profile', getHandler)`.

**Dynamic Routing:**
- Supports dynamic routing using parameters. Example: `app.get('/profile/:username', getHandler)`.

### EJS Setup:

**EJS (Embedded JavaScript):**
- Template engine for Express.js enabling dynamic HTML page generation.

**Setup:**
1. Install EJS: `npm i ejs`.
2. Configure in Express: `app.set('view engine', 'ejs')`.
3. Create a "views" folder.
4. Place EJS files inside "views."
5. Use `render` function to render EJS files.

### Static Files:

- Serve static files (stylesheets, frontend JS, images) using Express.js.
  - Images: `public/images`.
  - Stylesheets: `public/stylesheets`.
  - JS files: `public/javascripts`.

### Error Handling:

- Implement robust error-handling mechanisms in Express.js.

### Additional Points:

**Body Parser:**
- Middleware for handling POST requests. Install with `npm install body-parser`.

**HTTP Methods:**
- Express supports various HTTP methods beyond GET and POST.

**Template Variables:**
- Pass variables to EJS templates using the `render` function.

**Express Router:**
- Modularize routes with Express Router as the app grows.

## MongoDB Integration:

**Install MongoDB:**
- Ensure MongoDB is installed.

**Database Setup:**
- Establish a connection in `app.js`.
- Model setup, e.g., in `models/user.js`.

## Sessions:

Sessions store user-specific information on the server between requests, maintaining state and user data.

### Usage:
- Set session variables: `req.session.username = 'example'`.
- Read session variables: `const username = req.session.username`.
- Delete session variables: `delete req.session.username`.

### Implementation:
Use `express-session` middleware in Express.js.

1. Install: `npm install express-session`.
2. Setup sessions in `app.js`.

## Cookies:

Cookies store small pieces of data on the client's browser, commonly used for user preferences and authentication tokens.

### Usage:
- Set a cookie: `res.cookie('username', 'example')`.
- Read a cookie: `const username = req.cookies.username`.
- Delete a cookie: `res.clearCookie('username')`.

### Implementation:
Use `cookie-parser` middleware in Express.js.

1. Install: `npm install cookie-parser`.
2. Setup cookies in `app.js`.

## Flash Messages:

Flash messages are temporary messages for user feedback.

### Usage:
- Create a flash message: `req.flash('success', 'This is a success message')`.
- Read a flash message: `const successMessage = req.flash('success')`.

### Implementation:
Use `connect-flash` middleware in Express.js.

1. Install: `npm install connect-flash`.
2. Setup flash messages in `app.js`.
