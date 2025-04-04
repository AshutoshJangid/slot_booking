const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); 
require('./config/db'); 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} http://localhost:${PORT}/api/auth/test`);
});
