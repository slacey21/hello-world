const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
}

app.get("/", (req, res) => {
  res.redirect("/english");
});

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    currentPath: req.path,
    language: "en-US",
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    currentPath: req.path,
    language: "fr-FR",
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    currentPath: req.path,
    language: "sr-Cyrl-rs",
  });
});

app.get("/spanish", (req, res) => {
  res.render("hello-world-spanish", {
    currentPath: req.path,
    language: "es-ES",
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000.");
});