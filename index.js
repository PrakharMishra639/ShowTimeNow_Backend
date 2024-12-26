const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/Auth');
const adminRoutes = require('./Routes/Admin');
const movieRoutes = require('./Routes/Movie');
const imageuploadRoutes = require('./Routes/imageUploadRoutes');

require('dotenv').config();
require('./db');

// Port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Configure CORS
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001']; // Add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                console.error(`Blocked by CORS: ${origin}`);
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);

// Routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/movie', movieRoutes);
app.use('/image', imageuploadRoutes);

// Health Check Route
app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});

// Error Handler Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
});

// Global Error Handlers
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1); // Exit process on fatal errors
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); // Exit process on fatal errors
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
