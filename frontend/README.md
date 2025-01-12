# Movie Booking MERN Application

## Overview

This application is a **Movie Booking System** built with the **MERN stack** (MongoDB, Express, React, Node.js). Users can browse movies, select theatres, view showtimes, book seats, and manage their bookings. Admins have the ability to manage movies, theatres, and bookings.

---

## Features

### User Features

- **Authentication**: User login and registration.
- **Browse Movies**: View available movies and details.
- **Book Tickets**: Select a movie, theatre, and showtime to book seats.
- **View Tickets on mail**: User will get a mail for booked tickets.

### Admin Features

- **Manage Movies**: Add, update, or delete movies.
- **Manage Theatres**: Add, update, or delete theatres.

---

## Installation

### Prerequisites

- Node.js
- MongoDB
- npm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/PriyanshuPatel23/Genre_Movie_Booking.git
   cd Genre_Movie_Booking
   ```

2. Install dependencies for both the backend and frontend:

   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `backend` folder with the following keys:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     PORT=5000
     ```

4. Start the development servers:

   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Models

### User Model

Represents the application's users.

| Field              | Type    | Description                  |
| ------------------ | ------- | ---------------------------- |
| `email`            | String  | User's email (unique).       |
| `password`         | String  | User's hashed password.      |
| `name`             | String  | User's full name.            |
| `isAdmin`          | Boolean | Admin flag (default: false). |
| `resetToken`       | String  | Token for password resets.   |
| `resetTokenExpiry` | Date    | Expiry time for reset token. |

### Movie Model

Represents movies available for booking.

| Field       | Type       | Description                             |
| ----------- | ---------- | --------------------------------------- |
| `title`     | String     | Movie title.                            |
| `genre`     | String     | Movie genre.                            |
| `posterUrl` | String     | URL for the movie poster.               |
| `theatres`  | [ObjectId] | Array of theatre IDs showing the movie. |
| `showtimes` | Array      | Showtimes for the movie in theatres.    |

### Theatre Model

Represents theatres showing movies.

| Field       | Type       | Description                              |
| ----------- | ---------- | ---------------------------------------- |
| `name`      | String     | Theatre name.                            |
| `location`  | String     | Theatre location.                        |
| `seats`     | Number     | Total seats available.                   |
| `price`     | Number     | Base price for tickets.                  |
| `movies`    | [ObjectId] | Array of movie IDs shown in the theatre. |
| `showtimes` | Array      | Showtimes for movies in the theatre.     |

### Booking Model

Represents user bookings.

| Field           | Type     | Description                                |
| --------------- | -------- | ------------------------------------------ |
| `userId`        | ObjectId | ID of the user who made the booking.       |
| `movieId`       | ObjectId | ID of the booked movie.                    |
| `theatreId`     | ObjectId | ID of the theatre.                         |
| `showtime`      | String   | Showtime of the booking.                   |
| `seats`         | Number   | Number of seats booked.                    |
| `totalPrice`    | Number   | Total price for the booking.               |
| `paymentStatus` | String   | Payment status (pending/completed/failed). |

---

## API Endpoints

### User

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Authenticate user.

### Movie

- **GET /api/movies**: Get all movies.
- **POST /api/movies**: Add a new movie (Admin).
- **PUT /api/movies/:id**: Update a movie (Admin).
- **DELETE /api/movies/:id**: Delete a movie (Admin).

### Theatre

- **GET /api/theatres**: Get all theatres.
- **POST /api/theatres**: Add a new theatre (Admin).
- **PUT /api/theatres/:id**: Update a theatre (Admin).
- **DELETE /api/theatres/:id**: Delete a theatre (Admin).

### Booking

- **POST /api/bookings**: Create a new booking.
- **GET /api/bookings/user/:id**: Get bookings for a user.

---

## License

This project is licensed under the MIT License.
