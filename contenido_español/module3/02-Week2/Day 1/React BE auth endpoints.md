| HTTP Verb | Endpoint       | Request body            | Success | Error | Description                                                  |
| --------- | -------------- | ----------------------- | ------- | ----- | ------------------------------------------------------------ |
| `POST`    | `/auth/signup` | `{ username, password}` | 201     | 500   | Signup auth route to create a new user.                      |
| `POST`    | `/auth/login`  | `{ username, password}` | 200     | 500   | Login route to log in the existing user.                     |
| `POST`    | `/auth/logout` | N/A                     | 204     | 500   | Logout route. Destroys the current login session.            |
| `GET`     | `/auth/me`     | N/A                     | 200     | 500   | Returns user data from session storage, for react FE authentication. |
|           |                |                         |         |       |                                                              |

