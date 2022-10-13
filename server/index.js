const app = require("./App");

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is up and running ❤️");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT} 🔥`)
);
