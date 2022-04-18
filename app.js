const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "public")));
app.listen(process.env.PORT || 3000, () => console.log("Running on http://localhost:3000"));

app.get("/", (req, res) =>
	res.sendFile(path.resolve(__dirname, "views/home.html")),
);

app.get("/register", (req, res) =>
	res.sendFile(path.resolve(__dirname, "views/register.html")),
);

app.post("/register", (req, res) => {
	console.log("Se recibio el formulario");
	res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/login", (req, res) =>
	res.sendFile(path.resolve(__dirname, "views/login.html")),
);
app.post("/login", (req, res) => {
	console.log("Se recibio el formulario");
	res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/search", (req, res) => {
	console.log("Se busqueda");
});