// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import quoteRoutes from './routes/quotes.js';
// import adminRoutes from './routes/admin.js';
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/admin', adminRoutes);

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('✅ Connected to MongoDB Atlas'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// app.use('/api', quoteRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import adminRoutes from './routes/admin.js';
import quoteRoutes from './routes/quotes.js';

const app = express();

app.use(cors());
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "https://consultancyproject-2.onrender.com",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

mongoose.connect('mongodb+srv://kaviarasurp:kaviarasurp@cluster0.rxzqaan.mongodb.net/Quotation?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/admin', adminRoutes);
app.use('/api', quoteRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));