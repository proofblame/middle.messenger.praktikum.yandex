const express = require("express");

const app = express();
const PORT = 3000;

// app.use(express.static(__dirname + "/dist"));

const navLinks = [
  "/",
  "/signin",
  "/signup",
  "/account",
  "/reset-password",
  "/500",
  "/400",
];

// navLinks.forEach(() => {
//   app.get('/*', (req, res) => {
//     res.sendFile(__dirname + "/dist/index.html");
//   });
// });

app.use(express.static(__dirname + '/dist'));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
