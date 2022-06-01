const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv  = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")

dotenv.config()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DB connection is Sucess")
}
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
 

app.listen(8800, ()=>{
    console.log("backend is running")
})


