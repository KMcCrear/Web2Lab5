const express = require("express");
const router = express.Router();
const controller = require("../controllers/guestbookControllers");

router.get("/", controller.landing_page);

router.get("/guestbook", controller.entries_list);

router.get("/about", (req, res) => {
	res.redirect("/about.html");
});

router.get("/new", controller.new_entry);

router.get("/peter", controller.peters_entries);

router.use((req, res) => {
	res.status(404);
	res.type("text/plain");
	res.send("404 not found");
});

router.use((err, req, res, next) => {
	res.status(500);
	res.type("text/plain");
	res.send("Internatl server error 505");
});

module.exports = router;
