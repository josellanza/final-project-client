# Project Name (no idea now)

- A web page where users can vote books and also add comments. Anoninum users can view the score of a particular book and also his comments.

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
  
  **Signup:** As an anon I can sign up in the platform so that I can start voting and adding comments to the books
  
  **Login:** As a user I can login to the platform so that I can start voting and adding comments to the books
  
  **Logout:** As a user I can logout from the platform so no one can use my account

  **Search for a book** As a user I want to search for an specific book
 
  **See the book details** As a user I want to see the details of the book, see the details, see the average of the score and also see the comments of the book

  **Give a score to a book** As a user I want to give a score (1 to 10) to a book

  **Add a comment to a book** As a user I want to add a comment to a book

## Backlog

  **Add the number of votes** As a user I want to see how many ppl have voted that book.

  **Sort the comments of book** As a user I want to see the good and the bad comments, and also sort them, (e.g just see the bad comments or the good ones)

  **Sort the search** As a user I want to sort the search of a books (by price, by genre or by platform).

  **Add a graphic in the book detail** As a user I want to see the grafic of the scores of the books (how many ppl have given 1, how  many ppl have given 2, ... till 10,  in a grafic)
  
  
# Client

## Routes

  - / - Homepage
  - /auth/signup - Signup form
  - /auth/login - Login form
  - /book/:id - book detail

  ### Backlog

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- book Service
  - book.detail(id)
  - book.addComment(id, comment) Data - comment  
  - book.addScore(id, score) Data - score  

## Pages

- 404 Page
- Sign in Page
- Log in Page
- Home Page
- book Detail Page
- comment scroe

## Components

- Navbar component
- Sidebar component
- book Card component
- Vote book component
- Add comment book component

## IO

- Vote: *Input: book detail Page pass information to Vote book component *Output: Vote book component gives the score of the vote to the book Detail Page
- Add comment: *Input: book deta+il Page pass information to Add comment book component *Output: Add comment book component gives the score of the add comment to the book Detail Page

## Guards - Require ANON / Require USER / Auth Init

- 
- if logged in cannot access login/signup page
- if not logged in cannot vote
- if not logged in cannot add a comment ANON USER

# Server

## Models

  User model

  ```
  User {
    username: {
      type: string,
      required: true
    },
    password: {
      type: string,
      required: true
    }
  }
  ```

  Book {

    title: {
      type: string,
      required: true
    },
    image: {
      type: string,
      required: true
    },
    description: {
      type: string,
      required: true
    },
    author: {
      type: string,
      required: true
    }
    comments: [ {
      userId: string,
      comment: string
    } ]
}
```

## API Endpoints/Backend Routes

  - GET /auth/me
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/me
  - GET /profile/me
  - POST /favorite
  - GET /restaurante
  - GET /restaurant/:id