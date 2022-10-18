const app = require("./App");
<<<<<<< HEAD

const PORT = process.env.PORT || 4000;

=======
const connectToMongo = require("./Database/connectToDB");

const PORT = process.env.PORT || 4000;

// Connecting to Database
connectToMongo();

>>>>>>> 90a2a39ecdccd456e6f96ec13c53a026bad704c3
app.get("/", (req, res) => {
  res.send("Server is up and running ❤️");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT} 🔥`)
);
