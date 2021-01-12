const dotenv = require("dotenv");
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const colors = require("colors");

// Load env vars
dotenv.config({ path: "./config/.env" });

// Route files
const countryRouter = require("./routes/countryRoutes");
const continentRouter = require("./routes/continentRoutes");

// Parse requests
app.use(express.json());

// Enable CORS for all resources on server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(logger);
}

// Set static folder
app.use(express.static(`${__dirname}/public`));

// Body parser
app.use(express.json());

// Routes
app.get("/api/v1", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Welcome To Our Documentation"
  });
});

app.use("/api/v1/countries", countryRouter);
app.use("/api/v1/continents", continentRouter);

// 404 page
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Page Not Found" });
});

// Running the server
const PORT = process.env.PORT || 8000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));

})