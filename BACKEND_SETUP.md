# Backend Setup for Resume PDF

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Place Your Resume PDF**
   - Create a `public` folder in the root directory if it doesn't exist
   - Place your resume PDF file as `public/resume.pdf`

3. **Run the Backend Server**
   ```bash
   npm run server
   ```
   The server will run on `http://localhost:3001`

4. **Run Both Frontend and Backend Together**
   ```bash
   npm run dev:all
   ```
   This will start both the Vite dev server and the Express backend server concurrently.

## API Endpoint

- **GET** `/api/resume` - Returns the resume PDF file

## Notes

- The backend server runs on port 3001 by default
- The frontend is configured to proxy `/api` requests to the backend
- Make sure your resume PDF is named exactly `resume.pdf` and placed in the `public` folder

