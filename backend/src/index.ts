import app from "./app.js";
import connectToDatabase from "./db/connection.js";
//connections and listeners

const PORT = process.env.PORT || 3000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT} & Connect to Database`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
