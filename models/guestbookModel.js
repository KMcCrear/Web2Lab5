const nedb = require("nedb");

class GuestBook {
	constructor(dbFilePath) {
		if (dbFilePath) {
			this.db = new nedb({ filename: dbFilePath, autoload: true });
			console.log("Db connected to " + dbFilePath);
		} else {
			this.db = new nedb();
		}
	}
	init() {
		this.db.insert({
			subject: "I liked the exhibition",
			contents: "nice",
			published: "2020-02-16",
			author: "Peter",
		});
		console.log("db entry peter inserted");
		this.db.insert({
			subject: "I liked the exhibition",
			contents: "nice",
			published: "2020-02-16",
			author: "Peter",
		});
		console.log("db entry peter inserted");
	}
	getAllEntries() {
		return new Promise((resolve, reject) => {
			this.db.find({}, (err, entries) => {
				if (err) {
					reject(err);
				} else {
					resolve(entries);
					console.log("function all() returns", entries);
				}
			});
		});
	}
	getPetersEntries() {
		return new Promise((resolve, reject) => {
			this.db.find({ author: "Peter" }, (err, entries) => {
				if (err) {
					reject(err);
				} else {
					resolve(entries);
					console.log("function peter() returns", entries);
				}
			});
		});
	}
}

module.exports = GuestBook;
