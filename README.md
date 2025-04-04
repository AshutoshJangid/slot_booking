# Slot Booking System

A full-stack role-based Slot Booking application built with **Node.js**, **React**, and **MySQL**.

---

## 🚀 Features

- 🔐 JWT-based Authentication
- 👥 Role-based dashboards (Super Admin, Admin, User)
- ✍️ Separate registration panels for Admin & User
- ⚙️ REST API with Express & MySQL
- 💻 Frontend built using React
- 📁 Organized folder structure (frontend & backend)

---

## 📁 Project Structure

slot_booking/ 
├── backend/
 # Node.js Express API │
  ├── controllers/ │
  ├── routes/ │
  ├── models/ │ 
  ├── middleware/ 
  │ └── server.js │ 
├── frontend/ # React.js application
 │ ├── src/
 │ └── public/
 │ └── README.md


---

## ⚙️ Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Backend   | Node.js, Express   |
| Frontend  | React.js           |
| Database  | MySQL              |
| Auth      | JWT (JSON Web Token) |

---

## 🧑‍🏫 Getting Started (Full Setup Guide)

If you want to run this project locally, follow these steps:

### 1. Clone the Repository

    ```bash```
    git clone https://github.com/AshutoshJangid/slot_booking.git
    cd slot_booking
    cd backend
    npm install

    Create .env in backend/
        PORT=5000
        DB_HOST=localhost
        DB_USER=your_mysql_username
        DB_PASSWORD=your_mysql_password
        DB_NAME=your_database_name
        JWT_SECRET=your_very_secure_secret_key
    
    Start Backend Server
        nodemon server.js
        # or
        node server.js
    
    3. Frontend Setup
        cd ../frontend
        npm install
        npm start
    
    4. MySQL Setup
      Make sure you have MySQL running and a database created with the name you set in .env.
      Example: CREATE DATABASE your_database_name;

 User Roles
Role	        ID	Description
Super Admin	  1	  Full control access
Admin	        2	  Can manage users & slots
User	        3	  Can book and manage slots


🧑‍💻 Author
Ashutosh Jangid
📍 GitHub: @AshutoshJangid
