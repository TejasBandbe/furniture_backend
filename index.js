const express = require('express');
const cors = require('cors');
const customerRouter = require('./routes/customer');
const adminRouter = require('./routes/admin');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors('*'));
app.use('/api/customer', customerRouter);
app.use('/api/admin', adminRouter);

app.listen(process.env.SERVER_PORT, '0.0.0.0', () => {
    console.log("server started at "+process.env.SERVER_PORT+"...");
});