import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json({extended:true}));
app.use(express.json());
app.use(cors());

const CONNECTION_STRING = //stick ur mongodb code here
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => 
        app.listen(PORT, () => 
            console.log(`Server running on port: ${PORT}`)
        )
    )
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);