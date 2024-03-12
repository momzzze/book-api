# book-api

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

```json
{
    "title": "string",
    "imageUrl": "string",
    "description": "string",
    "publishedDate": "date"
}

```