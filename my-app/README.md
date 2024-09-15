# Quiz App

A web-based quiz application built with React and Express. This app features a React frontend and an Express backend to handle quiz data and results.

## Live Link

You can view the live application here: https://quiz-app-eta-sand.vercel.app/.

## Prerequisites

Before you start, ensure you have `Node.js` and `npm` installed on your machine.

## Setup Instructions

### 1. Install Node Modules

Navigate to the project directory:

```bash
cd my-app
```

### 2. Required Installations

First, run `npm install`, then install the following dependencies:

```bash
npm install express body-parser
npm install react-d3-speedometer
npm install react-circular-progressbar
npm install sass --save-dev
npm install cors
```

### 3. Configure `package.json`

- Ensure the `proxy` is added to run your backend.
- Ensure `start` is added to run the frontend.
- Ensure `backend` is added to run the backend.

Here’s an example configuration:

```json
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
```

### 4. How to Run the Application

- Make sure you are inside the project directory:

  ```bash
  cd my-app
  ```

- Run the backend:

  ```bash
  npm run backend
  ```

- Run the frontend:

  ```bash
  npm start
  ```
