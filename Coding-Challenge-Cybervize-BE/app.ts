import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import drugRoutes from './src/routes/drug.routes';

const app = express();
const port = process.env.PORT || 3000;
const dbUrl = 'mongodb+srv://gulfamhussain8008:t2ZsDNWLRDGf9XHL@cluster0.dnbcqgj.mongodb.net/?retryWrites=true&w=majority'; // Add your MongoDB connection URL

mongoose.connect(dbUrl);

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use('/api', drugRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app