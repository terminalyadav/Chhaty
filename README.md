# Chatty

Chatty is a real-time chat application built with a React frontend and a Node.js backend. It uses MongoDB for data storage and Axios for API communication.

## Project Structure

- **frontend**: Contains the React-based frontend code.
  - `vite.config.js`: Configuration for Vite, including proxy settings for the backend.
  - `src/utils/axios.js`: Axios instance for API calls.
- **backend**: Contains the Node.js backend code.
  - `src/models/message.model.js`: Mongoose schema for storing chat messages.

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```
   MONGO_URI=<your-mongodb-uri>
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variable:
   ```
   VITE_BACKEND_URL=https://chhaty-backend.vercel.app
   ```
4. Start the frontend server:
   ```bash
   npm run dev
   ```

## Features
- Real-time messaging
- Image sharing
- User authentication
- Responsive design

## Technologies Used
- **Frontend**: React, TailwindCSS, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Deployment**: Vercel

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
