import express from 'express';
import connectDB from './db.js';
import AuthRoutes from './routes/Auth.js';
import MessageRoutes from './routes/Message.js';
import cors from 'cors';

const app = express();
const port = 3001;

connectDB();
app.use(express.json());
app.use(cors());
app.use('/api/auth', AuthRoutes);
app.use('/api/messages', MessageRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
