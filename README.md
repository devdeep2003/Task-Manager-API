📝 Task Manager API

A simple Node.js + Express project for managing tasks with sessions.
Tasks are stored in a JSON file (tasks.json) inside the project.

🚀 Features

User authentication with sessions

Create, Read, Update, Delete tasks

Each task linked to the logged-in user

Persistent storage using JSON file

📂 Project Structure
TSKMG/
│
├── node_modules/                 # Dependencies
├── sessions/                     # Session store files
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js    # Handles user login/signup/logout
│   │   └── tasks.controller.js   # Handles task CRUD
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js    # Protect routes (only logged-in users)
│   │
│   ├── routes/
│   │   ├── auth.route.js         # Routes for authentication
│   │   └── task.route.js         # Routes for tasks
│   │
│   ├── utils/
│   │   ├── file.utils.js         # Helpers for reading/writing JSON
│   │   └── tasks/
│   │       └── tasks.json        # Data file for tasks
│   │
│   └── server.js                 # Entry point
│
├── .env                          # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

⚙️ Installation & Setup

Clone the repo:

git clone <repo-url>
cd TSKMG


Install dependencies:

npm install


Create a .env file:

PORT=8080
SESSION_SECRET=my-secret-key


Start the server:

npm start


Server will run at 👉 http://localhost:8080

🔑 API Endpoints
Authentication

POST /api/auth/login → log in a user

POST /api/auth/logout → log out

Tasks

POST /api/tasks/taskcreate → create a new task

GET /api/task/tasks → get all tasks

PUT /api/tasks/taskupdate/:id → update a task

DELETE /api/tasks/taskdelete/:id → delete a task

📖 Example Request/Response
➕ Create Task
POST /api/tasks


Body:

{
  "title": "Learn Node.js",
  "description": "Finish session handling module"
}


Response:

{
  "id": 1,
  "title": "Learn Node.js",
  "description": "Finish session handling module",
  "user": "deep"
}

📖 Get Tasks
GET /api/tasks


Response:

{
  "tasks": [
    {
      "id": 1,
      "title": "Learn Node.js",
      "description": "Finish session handling module",
      "user": "deep"
    }
  ]
}

🔒 Sessions

Uses express-session for session handling.

A sessions/ folder stores session data.

Each created task is linked to the session user (req.session.user.username).

📌 Future Improvements

Replace JSON storage with MongoDB / PostgreSQL

Add password hashing (bcrypt)

Use JWT tokens for authentication (alternative to sessions)

Add request validation (e.g., express-validator)
