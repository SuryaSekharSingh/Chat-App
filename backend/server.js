import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Handle malformed JSON errors from body-parser / express.json()
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Invalid JSON received:', err.message);
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    next();
});

app.get('/', (req, res) => {
    res.send("Hello there bruh!");
})

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);


app.listen(PORT, ()=> {
    connectMongoDB();
    console.log("Server running on port", PORT)
});