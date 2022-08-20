import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/User"

export default async function handler(req, res) {
	const body = req.body
	// Guard clause checks if userEmail and userPassword arrived,
	// and returns early if they are not found
	if (!body.userEmail || !body.userPassword) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ data: "Daten unvollständig" })
	}

	dbConnect()

	const user = await User.findOne({
		email: body.userEmail,
		password: body.userPassword,
	})

	if (!user)
		return res.status(400).json({ data: "Benutzer wurde nicht gefunden" })

	return res.status(200, "Benutzer gefunden").json({ data: user })
}
