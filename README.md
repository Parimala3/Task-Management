# Backend Developer Intern Assignment

## Overview
This project is built as part of a Backend Developer Intern assignment.  
It demonstrates a secure, scalable REST API with authentication, role-based access, CRUD operations, and a basic frontend UI to interact with the backend APIs.

The backend is the primary focus, while the frontend is a simple UI used to test and demonstrate API functionality.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcrypt (Password hashing)
- Swagger (API documentation)

### Frontend
- HTML
- CSS
- Vanilla JavaScript

---

## Features

### Authentication & Authorization
- User registration with hashed passwords
- User login with JWT authentication
- Role-based access ready (user / admin)
- Protected routes using JWT middleware

### CRUD Operations
- Create, Read, and Delete tasks
- Each task is associated with the logged-in user
- Secure access to task APIs

### API Design
- RESTful API structure
- API versioning (`/api/v1`)
- Proper HTTP status codes
- Input validation and error handling

### API Documentation
- Swagger UI for interactive API documentation

---

## Project Structure

```
backend-intern-task/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── app.js
│   └── style.css
├── swagger.yaml
├── package.json
└── README.md
```

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Parimala3/Task-Management
cd backend-intern-task
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
PORT=5000
MONGO_URI=mongodb+srv://admin:admin123@cluster0.xmnvth2.mongodb.net/?appName=Cluster0
JWT_SECRET=supersecretkey
```

### 4. Run the backend server
```bash
npx nodemon src/server.js
```

Backend will run at:
```
http://localhost:5000
```

---

## API Documentation (Swagger)

Swagger UI is available at:
```
http://localhost:5000/api-docs
```

All authentication and task APIs can be tested using Swagger.

---

## Frontend Usage

1. Open `frontend/index.html` in a browser
2. Register a new user
3. Login using the same credentials
4. Access the protected dashboard
5. Create, view, and delete tasks
6. Logout to clear JWT token

JWT is stored securely in browser localStorage and sent in the Authorization header for protected API requests.

---

## Security Practices
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Secure request handling

---

## Scalability Notes
- Backend can be split into microservices (Auth Service, Task Service)
- Redis can be added for caching frequently accessed data
- Docker can be used for containerization
- Load balancing using Nginx
- Suitable for cloud deployment (AWS / GCP)

---

## Author
Parimala Vuyyuru
