import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/User"

export default async function handler(req, res) {
	// Get data submitted in request's body.
	const body = req.body

	// Guard clause checks for userName and userPassword,
	// and returns early if they are not found
	if (!body.userName || !body.userPassword) {
		// Sends a HTTP bad request error code
		return res
			.status(400)
			.json({ data: "Benutzer oder Passwort sind nicht korrekt" })
	}

	console.log("userAuth:")

	dbConnect()

	// Get user data from DB
	User.findOne({ password: body.userPassword }, (err, doc) => {
		if (err) return res.status(400, "Kein übereinstimmendes Passwort gefunden")

		if (doc) {
			console.log("doc from db: ", doc.id)
			console.log("aljsfoaöhsöhdf-----------+++++++++++##########")
			return res.status(200).json({ data: doc })
		}
	})

	return
}
