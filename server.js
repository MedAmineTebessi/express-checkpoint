const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;
const route = require('./Routes/main');
const time = require('./Middlewares/time');

app.use(time);


app.use('/', route);
app.use(express.static(path.join(__dirname, 'Views')));



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
