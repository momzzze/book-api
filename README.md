# Book API

This repository contains the backend server for a book API.

## Swagger

You can explore the API documentation using Swagger at [https://book-api-05ci.onrender.com/](https://book-api-05ci.onrender.com/).

## Resources

- Users/Admins
- Books

## Endpoints

### Users

#### POST /users/register

Registers a new user.

**Required fields:**
- `username` (unique)
- `password`
- `rePassword` (password matching is implemented on the server side)
- `email` (unique)

**Optional fields:**
- `name`
- `imageUrl`
- `info`
- `role` (default is 'user')

#### Example Request Body
```json
{
    "username": "string",
    "password": "string",
    "rePassword": "string",
    "email": "string",
    "name": "string",
    "imageUrl": "string",
    "info": "string",
    "role": "string"
}