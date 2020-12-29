const dotenv = require("dotenv");
const connectDB = require("./config/initMongodb");
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const colors = require("colors");

// Load env vars
dotenv.config({ path: "./config/.env" });

// Connect to database
// connectDB();

// register view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // (ejsViewsAreIn, this location)

// Route files
const userRouter = require("./routes/userRoutes");

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(logger);
}

// Set static folder
app.use(express.static(`${__dirname}/public`));

// Body parser
app.use(express.json());

// Routes
app.get("/", (req, res, next) => {
  console.log("still here")
  res.status(200).render("home", {
    title: "index"
  });
});

app.use("/users", userRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

// Running the server
const PORT = process.env.PORT || 8000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
