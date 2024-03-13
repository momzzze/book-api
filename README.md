# book-api
backend server:https://book-api-05ci.onrender.com

# Resources
- Users/Admins
- Books

## Endpoints

### Users

- POST /users/register
  

#### POST /users/register
register user

required fields:
- username unique
- password
- rePassword: password matching is implemented on server side
- email unique
optional fields:
- name
- imageUrl
- info
- role: default is 'user'
     


### Books
- GET /books
- POST /books


#### GET /books
 get all books
 
 returns an array of books


### POST /books
create book

required fields:
- title:
    minimum length: 3    
- imageUrl:
    should be a valid url
- description:
    minimum length: 10
- publishedDate:
    should be a valid date

input data:

```json
{
    "title": "string",
    "imageUrl": "string",
    "description": "string",
    "publishedDate": "date"
}

```