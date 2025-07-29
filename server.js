const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // هذا السطر لازم يكون قبل استخدام process.env

const authRoutes = require('./routes/auth');
const requestRoutes = require('./routes/requests');

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error", err));

app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);

app.get('/', (req, res) => res.send('خبير - الخادم يعمل بنجاح'));
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
