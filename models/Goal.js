import mongoose from "mongoose"

/* GoalSchema will correspond to a collection in your MongoDB database. */
const goalSchema = new mongoose.Schema(
	{
		user: {
			/* The owner of this goal */
			type: mongoose.Types.ObjectId,
			require: true,
			ref: "User",
		},
		name: {
			/* The name of this goal */

			type: String,
			required: [true, "Please provide a name for this goal."],
			maxlength: [60, "Name cannot be more than 60 characters"],
		},
		description: {
			/* The description of this goal */

			type: String,
			required: [true, "Please provide a description for this goal."],
			maxlength: [60, "Name cannot be more than 60 characters"],
		},
		category: {
			/* The category of your goal */

			type: String,
			required: [true, "Please specify the category of your goal."],
			maxlength: [40, "Species specified cannot be more than 40 characters"],
		},
		comments: {
			/* List of comments, if applicable */

			type: Array,
		},
		status: {
			/* status of the goal */

			type: String,
			require: [true, "Please provide a status for this goal."],
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.models?.Goal || mongoose.model("Goal", goalSchema)
