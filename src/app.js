// libraries
const express = require("express");
require("dotenv").config()
const cookie_parser = require("cookie-parser")
const cors = require("cors")
const morgan= require("morgan")

// routes
const user_route= require("../routes/user")
const rec_route= require("../routes/recruiter")

// middleware
const error = require("../middleware/error")


// mongodb database connection
const mongo = require("../db/mongo");
mongo();

const app = express();


// middleware
app.use(express.json());
app.use(cookie_parser())
app.use(cors())
app.use(morgan("dev"))
app.use(error)
app.use("/api/v1",user_route)
app.use("/api/v1",rec_route)


const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`port is on @ ${port}`);
});
