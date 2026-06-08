# 📝 MERN Blog Platform with Comments

A full-stack Blog Platform built with MongoDB, Express.js, React.js, and Node.js. Users can register, log in, create blog posts, edit posts, delete posts, and interact through comments.

## Features

- User Registration & Login
- JWT Authentication
- Create Blog Posts
- Edit Blog Posts
- Delete Blog Posts
- View All Posts
- Add Comments
- View Comments
- MongoDB Database Integration
- REST API Architecture

## Tech Stack

- React.js
- Node.js
- Express.js
- MongoDB
- JWT
- Axios
- BcryptJS

## Installation

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Posts

```http
GET /api/posts
POST /api/posts
PUT /api/posts/:id
DELETE /api/posts/:id
```

### Comments

```http
GET /api/comments/:postId
POST /api/comments/:postId
```

## Project Structure

```text
blog-platform/
├── backend/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── api.js
│       ├── App.js
│       └── index.js
│
└── README.md
```

## Future Enhancements

- Rich Text Editor
- User Profiles
- Categories & Tags
- Search Functionality
- Likes & Reactions
- Admin Dashboard
- Image Uploads
- Dark Mode

## Author

**Hemnath P**

## License

This project is developed for educational and portfolio purposes.
