import dbConnect from "../../../lib/dbConnect"
import Goal from "../../../models/Goal"

export default async function handler(req, res) {
	const {
		query: { id },
		method,
	} = req

	await dbConnect()

	switch (method) {
		case "GET" /* Get a model by its ID */:
			try {
				const goal = await Goal.findById(id)
				if (!goal) {
					return res.status(400).json({ success: false })
				}
				res.status(200).json({ success: true, data: goal })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break

		case "GETBYUSERID" /* Get models by their UserID */:
			console.log("getbyuserid")
			try {
				const goals = await Goal.find({ user: id })
				if (!goals) {
					return res.status(400).json({ success: false })
				}
				res.status(200).json({ success: true, data: {} })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break

		case "PUT" /* Edit a model by its ID */:
			try {
				const goal = await Goal.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				})
				if (!goal) {
					return res.status(400).json({ success: false })
				}
				res.status(200).json({ success: true, data: goal })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break

		case "DELETE" /* Delete a model by its ID */:
			try {
				const deletedGoal = await Goal.deleteOne({ _id: id })
				if (!deletedGoal) {
					return res.status(400).json({ success: false })
				}
				res.status(200).json({ success: true, data: {} })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break

		default:
			res.status(400).json({ success: false })
			break
	}
}
