# Project Name (no idea now)

- A web page where users can vote video games and also add critics. Anoninum users can view the score of a particular game and also his critics.

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
  
  **Signup:** As an anon I can sign up in the platform so that I can start voting and adding critics to the video games
  
  **Login:** As a user I can login to the platform so that I can start voting and adding critics to the video games
  
  **Logout:** As a user I can logout from the platform so I can stop using it 

  **Search for a video game** As a user I want to search for an specific game
 
  **See the game details** As a user I want to see the details of the video game, see the details, see the average of the score and also see the critics of the game

  **Give a score to a video game** As a user I want to give a score (1 to 10) to a video game

  **Add a critic to a video game** As a user I want to add a critic to a video game

## Backlog

  **Add the number of votes** As a user I want to see how many ppl have voted that game.

  **Sort the critics of game** As a user I want to see the good and the bad critics, and also sort them, (e.g just see the bad critics or the good ones)

  **Sort the search** As a user I want to sort the search of a games (by price, by genre or by platform).

  **Add a graphic in the game detail** As a user I want to see the grafic of the scores of the games (how many ppl have given 1, how  many ppl have given 2, ... till 10,  in a grafic)
  
  
# Client

## Routes

  - / - Homepage
  - /auth/signup - Signup form
  - /auth/login - Login form
  - /game/:id - restaurant detail

  ### Backlog

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Game Service
  - Game.detail(id)   

## Pages

- 404 Page
- Sign in Page
- Log in Page
- Home Page
- Game Detail Page

## Components

- Navbar component
- Sidebar component
- Game Card component
- Vote game component
- Add critic game component

## IO

- Vote: *Input: Game detail Page pass information to Vote Game component *Output: Vote Game component gives the score of the vote to the Game Detail Page
- Add Critic: *Input: Game deta+il Page pass information to Add Critic Game component *Output: Add Critic Game component gives the score of the add critic to the Game Detail Page

## Guards - Require ANON / Require USER / 

- 
- if logged in cannot access login/signup page
- if not logged in cannot vote
- if not logged in cannot add a critic ANON USER

# Server

## Models

  User model

  ```
  User {
    username: {
      type: string,
      required: true
    },
    email: {
      type: string,
      required: true
      unique: true
    },
    password: {
      type: string,
      required: true
    }
  }
  ```

  Restaurant model

  ```
  Restaurant {
  name: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
    unique: true
  },
  phone: {
    type: string
  },
  address: {
    type: string
  }
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