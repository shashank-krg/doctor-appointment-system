const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const PORT = 4000;
const DB = "mongodb://localhost:27017/Doctor_appointment";

mongoose.connect(
    DB,
    { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Database Connect Successfully!');
        }
    }
);

app.listen(PORT, () => console.log(`Server is running on the port http://localhost:${PORT}`));