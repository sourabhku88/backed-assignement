# Backend Assignment

## APIs

### Welcome URL
- `/api/v1/`

### Google Login
- `/auth/google`

### Authentication
- `/login`
- `/logout`

### User
- `/user`
- `/profile/:userId`
- `/user/:userId`
- `/users`
- `/user/:userId`

## Description

### User Stories
- **User Registration:** Users can register a new account.
- **User Login:** Users can log in.
- **Third-Party Authentication:** Users can log in or register using at least one of the following services: Google, Facebook, Twitter, or GitHub.
- **User Logout:** Users can sign out.
- **Profile Details:** Users can view their profile details.
- **Edit Profile:** Users can edit their profile details including photo, name, bio, phone, email, and password.
- **Upload Photo:** Users can upload a new photo or provide an image URL.
- **Profile Privacy:** Users can choose to make their profile public or private.
- **Admin Access:** Admin users can see both public and private user profiles.
- **Normal User Access:** Normal users can only see public user profiles.

## Installation
1. Clone this repository.
2. Set up environment variables for configuration:
   - `PORT`: Port number for the server to listen on.
   - `DB_URL`: URL of the database.
   - `API_V`: API version.
   - `JWT_SECRET`: Secret key for JWT token generation.
   - `CLOUD_NAME`, `API_KEY`, `API_SECRET`: Cloudinary credentials for image upload.
   - `GOOGLE_CLIENT_SECRET`, `GOOGLE_CLIENT_ID`: Google OAuth credentials.
3. Install dependencies using `npm install`.
4. Configure environment variables for authentication and Google login (if required).
5. Start the local server using `npm start-dev`.

## Usage
1. Use the provided routes to interact with the server.
2. Authenticate users using `/login` and `/logout`.
3. Manage user profiles using the `/user` and `/users` endpoints.
4. Utilize Google login functionality with `/auth/google` .

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
