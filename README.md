# Getting Started with Blog Api

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [postman](http://localhost:3000) to use the application.

Add [http://localhost:3000].\

### `Create an account

 type this in the postman with method POST http://localhost:3000/api/users/user-signup for creating an account with email, password, username
 
### `Login to an account

 type this in the postman with method POST http://localhost:3000/api/users/user-login for login into an account use your email, and password, with the token of the user
 
### `Create a blog`

 type this in the postman with method POST [http://localhost:3000/api/users/user-login](http://localhost:3000/api/blogs) for creating a blog with a title, description, and comments if you have any with jwt
 
### `Get all blogs`

 type this in the postman with method GET [http://localhost:3000/api/users/user-login](http://localhost:3000/api/blogs) 
 
### `Get a single blog`

 type this in the postman with method GET (http://localhost:3000/api/blogs/:'PostId')http://localhost:3000/api/blogs/:'PostId'
 
### `Delete a  single blog`

 type this in the postman with method DELETE (http://localhost:3000/api/blogs/:'PostId')http://localhost:3000/api/blogs/:'PostId'
 
### `Update a  single blog`

 type this in the postman with method PUT (http://localhost:3000/api/blogs/:'PostId')http://localhost:3000/api/blogs/:'PostId' with a title, description, and comments if you have any with JWT
 
### `Add a comment to the single Blog`

 type this in the postman with method PUT (http://localhost:3000/api/blogs/comment/:'PostId')http://localhost:3000/api/blogs/comment/:'PostId' with a content 
 
 
