# Quiz App

A web-based quiz application built with React and Express. This app features a React frontend and an Express backend to handle quiz data and results.

## Prerequisites

Before you start, ensure you have `Node.js` and `npm` installed on your machine.

## Setup Instructions

### 1. Install Node Modules

Navigate to the project directory

cd my-app

### 2. Required Installations

first do npm install then followed by the below installations

- npm install express body-parser
- npm install react-d3-speedometer
- npm install react-circular-progressbar
- npm install sass --save-dev
- npm install cors

### 3. Configure package.json

- make sure proxy is added to run you backend
- make sure start is added to run frontend 
- make sure backend is added to run backend

Please refer below on how to add:

{
  "name": "my-app",
  "version": "1.0.0",
  "private": true,
  "proxy": "http://localhost:5000",
  "scripts": {
    "start": "react-scripts start",
    "backend": "node backend/server.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

### 4. How to Run the appliation

- make sure you are inside the project directory cd my-app
- npm run backend (to run backend)
- npm start (to run frontend)
