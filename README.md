# Tortillon-Task

# Product Management and Cart System

A full-stack product management and cart system built using React.js for the front end, Django for the back end, and PostgreSQL for the database. The system allows users to manage products, add them to the cart, and place orders with CRUD operations.

## Table of Contents

-   [Project Setup Instructions](#project-setup-instructions)
    -   [Frontend Setup](#frontend-setup)
    -   [Backend Setup](#backend-setup)
-   [Tech Stack](#tech-stack)

## Project Setup Instructions

### Frontend Setup (React.js)

1. Clone the repository:

    git clone https://github.com/Ashique64/Tortillon-Task.git
    cd Tortillon-Task

2. Navigate to the frontend directory:
   cd frontend

3. Install the required dependencies:
   npm install

4. Start the development server:
   npm start

#### Backend Setup (Django)

1. Navigate to the backend directory:
   cd backend

2. Create and activate a virtual environment:
   python -m venv venv
   source venv/bin/activate # For MacOS/Linux
   venv\Scripts\activate # For Windows

3. Install the required dependencies:
   pip install -r requirements.txt

4. Create the database and apply migrations:
   python manage.py migrate

5. Start the development server:
   python manage.py runserver

##### Tech Stack

# Frontend

1. React.js: A JavaScript library for building user interfaces. Used to create the dynamic and interactive front-end of the     application.

2. Redux: A state management tool used to manage and centralize the application state, particularly for the cart.

3. SCSS: Used for styling and responsiveness of the front end.

## Backend

1. Django: A high-level Python web framework used for building the back end of the application, handling API requests, and managing the database.

2. Django Rest Framework (DRF): A toolkit for building APIs in Django. Used to create endpoints for managing products and orders.

3. PostgreSQL: A relational database management system used to store product and order data.

4. Python: The primary programming language for the backend.

### Tools

1. Postman: Used for testing API endpoints during development.

2. Git: Version control system for tracking code changes and collaborating with other developers.


