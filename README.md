#  Task - Full-Stack Task Management Application

A modern, responsive, and robust full-stack web application for managing daily tasks. Built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled with the latest **Tailwind CSS v4** via Vite.

This project was developed with a strong focus on clean architecture, component-based UI design, data validation, and graceful error handling.

---

##  About

- **Functionality:** Implements full CRUD (Create, Read, Update, Delete) operations for tasks.
- **Code Quality:** Backend utilizes an Enterprise/Company-style **MVC (Model-View-Controller)** architecture. Frontend uses a modular, component-based architecture for maximum reusability.
- **Persistence:** Data is securely stored and retrieved using a cloud-hosted **MongoDB Atlas** database via Mongoose ODM.
- **Error Handling:** Features a **Global Error Handling Middleware** on the backend and graceful, user-friendly UI error banners on the frontend. Prevents app crashes and provides meaningful feedback.
- **Bonus 1 (Due Dates):** Implemented native HTML5 date pickers and stored as ISO dates in MongoDB.
- **Bonus 2 (Categories):** Implemented category tagging with visual UI badges and form dropdown selection.
- **Bonus 3 (Unit Tests):** Frontend components are tested using **Vitest** and **React Testing Library**.

---

##  Screenshots
<img width="1899" height="619" alt="Screenshot 2026-04-03 224702" src="https://github.com/user-attachments/assets/b72040d1-c7ec-48bf-9431-b886f7349a97" />
<img width="1897" height="804" alt="Screenshot 2026-04-03 224652" src="https://github.com/user-attachments/assets/0375a475-e5f6-41f8-a629-a08ff93f9a28" />
<img width="1901" height="462" alt="Screenshot 2026-04-03 224720" src="https://github.com/user-attachments/assets/0021eb54-f405-4710-b60a-6b48131984ca" />
<img width="1901" height="430" alt="Screenshot 2026-04-03 224710" src="https://github.com/user-attachments/assets/ed35f8f0-a69c-401a-bb2a-6c722c4e6fe9" />
<img width="1920" height="1080" alt="Screenshot 2026-04-03 230641" src="https://github.com/user-attachments/assets/1fef7ed2-d46e-430b-bba0-92b68bd9d020" />




---

##  Tech Stack & Libraries Used

### **Frontend**
* **React 18:** Core UI library.
* **Vite:** Next-generation frontend tooling for lightning-fast HMR and building.
* **Tailwind CSS v4:** Utility-first CSS framework implemented natively via the `@tailwindcss/vite` plugin.
* **Vitest & React Testing Library:** For robust component unit testing and DOM simulation (`jsdom`).

### **Backend**
* **Node.js & Express.js:** Server environment and web framework.
* **MongoDB & Mongoose:** NoSQL database and Object Data Modeling (ODM) library.
* **dotenv:** For managing environment variables securely without hardcoding credentials.
* **cors:** Middleware to enable Cross-Origin Resource Sharing between the frontend and backend.
* **express-async-handler:** Utility to handle exceptions inside async express routes, eliminating the need for repetitive `try/catch` blocks in controllers.

---

##  Architecture & Key Technical Decisions

### 1. Backend: MVC Pattern & Middleware
Instead of dumping all logic into `server.js`, the backend is structured professionally:
* **Models (`/models/Task.js`):** Enforces strict data schemas using Mongoose. Includes native timestamp generation (`{ timestamps: true }`).
* **Controllers (`/controllers/taskController.js`):** Isolates business logic from routing. Uses `express-async-handler` for clean, readable async code.
* **Routes (`/routes/taskRoutes.js`):** Clean RESTful endpoint definitions.
* **Global Error Middleware (`/middleware/errorMiddleware.js`):** Catches any server/database errors globally, ensuring the server never crashes and always returns standard JSON error objects.

### 2. Frontend: Component-Driven Design
The frontend avoids "prop-drilling" mess by separating concerns:
* **`App.jsx`:** Acts as the Container component managing API calls and application state.
* **`TaskForm.jsx`:** Handles input validation and form submission for both Creating and Editing tasks.
* **`TaskList.jsx` & `TaskItem.jsx`:** Presentational components responsible purely for rendering UI beautifully.

### 3. Graceful Validation
* **Backend:** Rejects empty strings and prevents users from marking already-completed tasks as completed (Returning `400 Bad Request`).
* **Frontend:** Form submission prevents empty titles with real-time UI feedback before hitting the server, saving network requests.

---

##  Installation & Setup Guide

To run this application locally, you will need **Node.js** and an active **MongoDB Atlas URI** (or local MongoDB installation).

