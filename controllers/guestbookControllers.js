const res = require("express/lib/response");

const guestBookDAO = require("../models/guestbookModel");
const db = new guestBookDAO();
db.init();
exports.entries_list = (req, res) => {
	res.send(
		"<h1>Guestbook Messages</h1><p>Not yet implimeted: will show a list of guest book entreis</p>"
	);
	db.getAllEntries();
};

exports.peters_entries = (req, res) => {
	res.send("<h1>Processing Peter's Entreis, see terminal </h1>");
	db.getPetersEntries();
};

exports.landing_page = (req, res) => {
	res.send("<h1>Hello and welcome to the guestbook application</h1>");
};

exports.new_entry = (req, res) => {
	res.send("<h1>Not Implimented yet: show a new entry page. </h1>");
};
