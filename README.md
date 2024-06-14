---

# User-Management-Frontend

## Overview

This is a simple front-end application built with React, Vite, and Material-UI (MUI). The app includes user authentication, registration, and a profile view with a list of friends.

## Features

- User Registration
- User Login
- Display User Profile
- Display User Friends List
- Display All Users

## Technologies Used

- React
- Vite
- TypeScript
- Material-UI
- Axios

## Project Structure

- `src/components`: Contains the React components used in the application.
    - `LoginForm.tsx`: Component for user login.
    - `RegisterForm.tsx`: Component for user registration.
    - `UserProfile.tsx`: Component to display user profile and friends list.
  - `UserList.tsx`: Component to display all users.
- `src/App.tsx`: Main application component that sets up routes.
- `src/main.tsx`: Entry point of the application.

## Setup and Installation

1. **Clone the Repository**
    
    ```bash

    git clone <repository_url>
    cd my-app
    
    ```
    
2. **Install Dependencies**
    
    ```
    npm install
    
    ```
    
3. **Run the Application**
    
    ```
    npm run dev
    
    ```
    
    The application will be available at `http://localhost:5173`.
    

## Configuration

- **CORS Configuration**: The app is configured to communicate with a backend server running at `https://user-management-backend-one.vercel.app/`.
- **Authorization**: Ensure that the backend server sends the authorization token in the response which is then stored in the local storage for subsequent requests.

## Usage

- **Register a New User**: Navigate to `/register` and fill in the registration form.
- **Login**: Navigate to `/login` and enter your email and password. The application will store the token and redirect you to the profile page.
- **View Profile**: After logging in, navigate to `/profile` to view your profile information and friends list.

## Component Details

### LoginForm

- Handles user login.
- Sends a POST request  with email and password.

### RegisterForm

- Handles user registration.
- Sends a POST request  with username, email, and password.

### UserProfile

- Displays user profile information and friends list.
- Fetches data from  using the stored authorization token.

###UserList
- Displays a list of all users.
- Fetches data of all registered users using the stored authorization token.

##