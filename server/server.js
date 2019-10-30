const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

// do this static
app.use(express.static(publicPath));

app.listen (port, ()=>{
    console.log(`Server has been started om ${port}...`);
});
