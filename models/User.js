import mongoose from "mongoose"

/* PetSchema will correspond to a collection in your MongoDB database. */
const userSchema = new mongoose.Schema(
	{
		name: {
			/* The name of this user */

			type: String,
			required: [true, "Please provide a name for the user."],
			maxlength: [60, "Name cannot be more than 60 characters"],
		},
		email: {
			/* The email of this user  */

			type: String,
			// required: [true, "Please provide a email for the user."],
			maxlength: [60, "Email cannot be more than 60 characters"],
		},
		password: {
			/* The password of this user  */

			type: String,
			required: [true, "Please provide a password for the user."],
			maxlength: [40, "Password cannot be more than 40 characters"],
		},
		age: {
			/* The age of this user */

			type: Number,
		},
		goals: {
			/* The goals of this user */

			type: Array,
		},
		poddy_trained: {
			/* Boolean poddy_trained value, if applicable */

			type: Boolean,
		},
		diet: {
			/* List of dietary needs, if applicable */

			type: Array,
		},
		avatar_image_url: {
			/* Url to avatar image */

			type: String,
		},
		likes: {
			/* List of things your pet likes to do */

			type: Array,
		},
		dislikes: {
			/* List of things your pet does not like to do */

			type: Array,
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.models?.User || mongoose.model("User", userSchema)
