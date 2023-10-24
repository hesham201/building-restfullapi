const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false); // Add this line to set strictQuery to false
  mongoose
    .connect("mongodb://127.0.0.1:27017/CRMdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`MongoDB Connected`);
    })
    .catch((err) => console.log("connection error", err));
};

module.exports = connectDB;
