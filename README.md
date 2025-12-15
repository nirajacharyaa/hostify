## Quickstart

```bash
pnpm install
pnpm dev
```

## Setup envirenment

```text
cp .env.example .env

```

## Authentication flow

This project uses JWT based authentication with httpOnly cookies set by server API routes

Steps (detailed):

1. User fills the sign-up form on the frontend and sends POST /api/signup with JSON body.
2. The api validates the request body and creates the user in the in-memory array of users, generates a JWT, and sets an httpOnly cookie containing the token.

3. On sign-in, frontend calls POST /api/signin server validates credentials, issues a JWT, sets the cookie, and returns user info.
4. Logout calls POST /api/logout which clears the cookie from the browser.
5. The user is can be GET by /api/me which returns the user.

## API documentation

| Path                  | Method | Auth Routes | params/ query                    | Desc                                      |
| --------------------- | -----: | :---------: | -------------------------------- | ----------------------------------------- |
| `/api/signup`         |   POST |     no      | JSON: `{ email, password, ... }` | Create a new user, sets auth cookie.      |
| `/api/signin`         |   POST |     no      | JSON: `{ email, password }`      | validate and auth user, sets auth cookie. |
| `/api/logout`         |   POST |     no      | none                             | clears auth cookie from the browser       |
| `/api/me`             |    GET |     yes     | none                             | Returns the current authenticated user.   |
| `/api/check-email`    |   HEAD |     no      | query: `?email=hi@niraj.com.np`  | Check if user with the email exists.      |
| `/api/properties`     |    GET |     no      | query: `page`, `limit`           | returns list of peroperties               |
| `/api/properties/:id` |    GET |     no      | param i                          | Returns a single property detail.         |
