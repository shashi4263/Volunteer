import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Volunteering_Project",
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("Some error occurred while connecting to Database", error);
    });
};
