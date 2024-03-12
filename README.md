# book-api
backend server:https://book-api-05ci.onrender.com
## Endpoints

### GET /books
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