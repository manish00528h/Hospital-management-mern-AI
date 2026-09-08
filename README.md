# 🏥 LifeCare Medical Institute — Hospital Management System with AI Disease Prediction

LifeCare Medical Institute is a full-stack **Hospital Management System** designed to provide a centralized platform for patients, hospital staff and administrators.

The application allows patients to create accounts, authenticate securely, explore hospital departments, book appointments, view appointment information and use an **AI-based symptom prediction system**.

The project follows a modular architecture using the **MERN stack** for the main web application and a separate **Python Flask + Machine Learning service** for disease prediction.

---

## 🚀 Key Features

### 👨‍⚕️ Patient Features

* Patient registration and login
* Secure authentication using JWT
* Password hashing using bcrypt
* View hospital information
* Explore hospital departments
* View available healthcare services
* Book appointments
* View appointment information
* Send messages to the hospital
* Use AI Doctor for symptom-based disease prediction

### 🏥 Hospital & Appointment Management

* Appointment creation
* Appointment status management
* Patient appointment tracking
* Admin-controlled appointment operations
* Protected appointment APIs
* Role-based access control

### 🤖 AI Doctor

The project includes a separate machine-learning-based disease prediction service.

The AI Doctor:

1. Accepts symptoms provided by the user
2. Converts symptoms into a numerical feature vector
3. Passes the feature vector to a trained SVC model
4. Predicts a possible disease class
5. Provides additional information related to the prediction

The system can provide:

* Disease description
* Precautions
* Medication information
* Diet recommendations
* Workout recommendations

> **Note:** The AI Doctor provides a machine-learning-based prediction and is not a replacement for professional medical diagnosis.

---

# 🏗️ System Architecture

The application is divided into four major modules:

```text
                         ┌─────────────────────────┐
                         │        USER / PATIENT   │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │     REACT FRONTEND      │
                         │                         │
                         │  • Login / Register     │
                         │  • Home / About         │
                         │  • Appointments         │
                         │  • Departments          │
                         │  • AI Doctor            │
                         │  • Messages             │
                         └────────────┬────────────┘
                                      │
                              REST API Requests
                                      │
                                      ▼
                    ┌────────────────────────────────┐
                    │       NODE.JS + EXPRESS        │
                    │            BACKEND             │
                    │                                │
                    │  • Authentication              │
                    │  • User Management             │
                    │  • Appointment APIs             │
                    │  • Message APIs                 │
                    │  • Authorization Middleware     │
                    └───────────────┬────────────────┘
                                    │
                         ┌──────────┴──────────┐
                         ▼                     ▼
              ┌──────────────────┐   ┌──────────────────┐
              │     MongoDB      │   │   Admin Dashboard │
              │                  │   │      (React)      │
              │ • Users          │   │                  │
              │ • Appointments   │   │ • Appointments   │
              │ • Messages       │   │ • Management     │
              └──────────────────┘   └──────────────────┘


                         AI Doctor Flow
                         
        User Symptoms
              │
              ▼
       Python Flask API
              │
              ▼
       Feature Vector
              │
              ▼
       Trained SVC Model
              │
              ▼
      Possible Disease
              │
              ▼
   Additional Information
```

---

# 🔄 Application Flow

```text
Patient
   │
   ├── Register / Login
   │        │
   │        ▼
   │    JWT Authentication
   │        │
   │        ▼
   ├── Explore Hospital
   │
   ├── View Departments
   │
   ├── Book Appointment
   │        │
   │        ▼
   │    Backend API
   │        │
   │        ▼
   │      MongoDB
   │
   ├── View Appointments
   │
   ├── Send Message
   │
   └── AI Doctor
            │
            ▼
        Enter Symptoms
            │
            ▼
        Feature Vector
            │
            ▼
        SVC Prediction
            │
            ▼
       Possible Disease
```

---

# 🧩 Project Architecture

The project contains four major applications/modules.

### 1. Frontend

The frontend is the main patient-facing React application.

Responsibilities:

* User interface
* Navigation
* Authentication screens
* Appointment interface
* Hospital information
* Department information
* API communication
* AI Doctor access

---

### 2. Backend

The backend is built using **Node.js and Express.js**.

Responsibilities:

* REST API development
* Authentication
* Authorization
* User management
* Appointment management
* Message management
* Database communication

The backend follows a modular structure using controllers, models, routers and middleware.

---

### 3. Admin Dashboard

The dashboard is a separate React application used for administrative operations.

It provides a centralized interface for managing hospital-related data and appointment operations.

---

### 4. AI Doctor

The AI Doctor is implemented as a separate **Python Flask application**.

It uses a trained **Support Vector Classifier (SVC)** machine learning model.

The service receives symptoms, converts them into a numerical representation and generates a possible disease prediction.

---

# 📁 Project Structure

```text
Hospital-management-mern-AI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── dashboard/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controller/
│   │   ├── userController.js
│   │   ├── appointmentController.js
│   │   └── messageController.js
│   │
│   ├── database/
│   │   └── dbConnection.js
│   │
│   ├── middlewares/
│   │   └── authentication.js
│   │
│   ├── models/
│   │   ├── userSchema.js
│   │   ├── appointmentSchema.js
│   │   └── messageSchema.js
│   │
│   ├── router/
│   │   ├── userRouter.js
│   │   ├── appointmentRouter.js
│   │   └── messageRouter.js
│   │
│   ├── utils/
│   ├── app.js
│   └── package.json
│
├── Aidoctor/
│   ├── main.py
│   ├── models/
│   │   └── svc.pkl
│   ├── datasets/
│   └── ...
│
├── README.md
└── ...
```

---

# 🔐 Authentication & Authorization

The application uses **JWT-based authentication**.

### Authentication Flow

```text
User
 │
 ▼
Login
 │
 ▼
Backend verifies credentials
 │
 ▼
JWT Token Generated
 │
 ▼
Token stored by client
 │
 ▼
Protected API Request
 │
 ▼
Authentication Middleware
 │
 ▼
Authorized Request
```

Passwords are hashed using **bcrypt** before being stored.

Protected routes use authentication middleware to prevent unauthorized access.

Different operations can be restricted based on the user's role.

---

# 📅 Appointment Management

The appointment system follows a REST API architecture.

### Main operations

```text
POST    /api/v1/appointment/post
GET     /api/v1/appointment/getall
PUT     /api/v1/appointment/update/:id
DELETE  /api/v1/appointment/delete/:id
```

### Appointment Flow

```text
Patient
   │
   ▼
Appointment Form
   │
   ▼
POST Request
   │
   ▼
Authentication Middleware
   │
   ▼
Appointment Controller
   │
   ▼
MongoDB
```

Administrative appointment operations are protected using admin authentication.

---

# 🤖 AI Disease Prediction Architecture

The AI Doctor uses a trained SVC machine learning model.

```text
User Symptoms
      │
      ▼
Symptom Processing
      │
      ▼
Numerical Feature Vector
      │
      ▼
Trained SVC Model
      │
      ▼
Disease Prediction
      │
      ├── Description
      ├── Precautions
      ├── Medication
      ├── Diet
      └── Workout
```

### AI Model Flow

The application loads the trained model:

```python
svc = pickle.load(open("models/svc.pkl", "rb"))
```

The symptoms are converted into a numerical vector before being passed to the trained model.

The model then predicts a possible disease class.

---

# 🛠️ Technology Stack

## Frontend

* React.js
* React Router
* Axios
* Vite
* React Toastify
* JavaScript
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* CORS
* Cloudinary

## AI / Machine Learning

* Python
* Flask
* NumPy
* Pandas
* Scikit-learn
* Support Vector Classifier (SVC)
* Pickle

## Development Tools

* Git
* GitHub
* VS Code
* npm

---

# 🔌 Backend API Structure

The backend separates APIs into different routers.

```text
/api/v1/user
        │
        └── User Authentication & Management

/api/v1/appointment
        │
        └── Appointment Management

/api/v1/message
        │
        └── Hospital Messages
```

This separation improves maintainability and makes it easier to add new features.

---

# 🗄️ Database

MongoDB is used as the primary database.

The application uses Mongoose to define schemas and communicate with MongoDB.

Main data entities include:

```text
User
Appointment
Message
```

---

# 📱 Main Application Pages

### Patient Application

* Home
* Appointment
* About Us
* Login
* Registration
* AIDOCTOR
* Departments
* Messages
* User Appointments

### Hospital Departments

The application currently provides information for:

* Pediatrics
* Orthopedics
* Cardiology
* Neurology
* Oncology
* Radiology
* Physical Therapy
* Dermatology
* ENT

---

# ⚙️ Installation & Setup

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Python
* MongoDB
* Git

---

## 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Hospital-management-mern-AI
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install --legacy-peer-deps
```

Start the backend:

```bash
npm run dev
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install --legacy-peer-deps
```

Start the frontend:

```bash
npm run dev
```

---

## 4. Install Dashboard Dependencies

Open another terminal:

```bash
cd dashboard
npm install --legacy-peer-deps
```

Start the dashboard:

```bash
npm run dev -- --port 5174
```

---

## 5. Install AI Doctor Dependencies

Open another terminal:

```bash
cd Aidoctor
pip install Flask numpy pandas scikit-learn
```

Start the Flask application:

```bash
python main.py
```

---

# 🌐 Local Development URLs

| Application      | URL                     |
| ---------------- | ----------------------- |
| Patient Frontend | `http://localhost:5173` |
| Admin Dashboard  | `http://localhost:5174` |
| AI Doctor        | `http://127.0.0.1:5000` |
| Backend API      | `http://localhost:4000` |

---

# 🔒 Environment Variables

Create the required environment configuration for the backend.

Example:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
JWT_EXPIRES=7d
```

Do **not** commit real credentials or secret keys to GitHub.

---

# 🧪 Testing the Application

After starting all services:

### Patient Application

Open:

```text
http://localhost:5173
```

Test:

```text
Register
   ↓
Login
   ↓
Explore Hospital
   ↓
Book Appointment
   ↓
View Appointment
   ↓
Use AI Doctor
```

### Admin Dashboard

Open:

```text
http://localhost:5174
```

Test the administrative appointment management functionality.

### AI Doctor

Open:

```text
http://127.0.0.1:5000
```

Provide symptoms and verify that the prediction workflow works correctly.

---

# 🧹 Code Quality

The backend follows a modular structure:

```text
Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Models
   ↓
MongoDB
```

Benefits:

* Separation of concerns
* Easier debugging
* Better maintainability
* Reusable components
* Easier feature expansion

---

# 🔄 Git & Version Control

Git is used throughout development to track project changes.

The repository history includes commits related to:

* Initial project setup
* README documentation
* MERN and machine-learning integration
* Configuration updates

---

# 🚀 Future Improvements

Possible future improvements include:

* Online payment integration
* Doctor-specific dashboard
* Real-time appointment notifications
* Email/SMS appointment reminders
* More advanced ML models
* Improved AI model validation
* Doctor availability scheduling
* Prescription management
* Medical report uploads
* Deployment using cloud services
* Automated testing and CI/CD

---

# ⚠️ Disclaimer

The AI Doctor feature is intended for educational and informational purposes.

Its output represents a machine-learning-based prediction from the symptoms provided by the user and should not be considered a confirmed medical diagnosis.

---

# 👨‍💻 Author

**Manish**

B.Tech — Artificial Intelligence & Data Science

GitHub: `<YOUR_GITHUB_PROFILE>`

LinkedIn: `<YOUR_LINKEDIN_PROFILE>`

---

# ⭐ Project Highlights

```text
✔ MERN Full-Stack Application
✔ JWT Authentication
✔ bcrypt Password Security
✔ REST APIs
✔ MongoDB Database
✔ Role-Based Access Control
✔ Appointment Management
✔ Separate Admin Dashboard
✔ Python Flask AI Service
✔ SVC Machine Learning Model
✔ Modular Backend Architecture
✔ Git Version Control
```
