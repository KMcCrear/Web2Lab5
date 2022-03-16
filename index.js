const express = require("express");
const req = require("express/lib/request");
const router = require("./routes/guestbookRoutes");
const path = require("path");
const public = path.join(__dirname, "public");
const app = express();

app.use("/", router);
app.use(express.static(public));
app.use(express.urlencoded({ extended: false }));

const serverPort = 3000;

app.listen(serverPort, () => {
	console.log(`Server running on port: ${serverPort}`);
});
