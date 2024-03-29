// Import Express Package
const express = require("express");

// Initialize express
const app = express();

// Serve static build files from the "dist" directory
app.use(express.static("./dist/todolist"));

// Route incoming server requests to the correct files
app.get("/*", (_, res) =>
  res.sendFile("index.html", { root: "dist/todolist/" })
);

// Start the app on the default Heroku port
app.listen(process.env.PORT || 8080);
