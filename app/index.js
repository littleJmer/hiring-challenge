const express = require('express');
const { router } = require('./routes/index');
const { dbConnect } = require("./db/index");

const app = express();
const PORT = 3000;

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// log middleware
app.use((req, res, next) => {
    console.log('::: Client request :::');
    console.log('Path: ', req.path);
    console.log('Body: ', JSON.stringify(req.body, null, '\t'));
    next();
});

dbConnect();
router(app);

// error-handling middleware
app.use((error, req, res, next) => {
    console.log('::: Error Handling Middleware called :::');
    console.log('Path: ', req.path);
    console.error('Error: ', error);
    res.status(500).json({ message: 'We sorry please try later' });
});

app.listen(PORT, () => {
    console.log(`GBG Engineering Hiring Challenge listening at http://localhost:${PORT}`);
});