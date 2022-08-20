import { useRouter } from "next/router"

const FormLogin = ({ children }) => {
	const router = useRouter()

	const handleSubmit = async (event) => {
		event.preventDefault()

		const formData = {
			userName: event.target.userName.value,
			userPassword: event.target.userPassword.value,
		}

		const JSONdata = JSON.stringify(formData)
		const endpoint = "http://localhost:3000/api/auth/userAuth"
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSONdata,
		}

		const res = await fetch(endpoint, options)
		const result = await res.json()

		if (!result.data) {
			res.status(400, "data ist leer")
		}

		if (result.data) {
			router.push(result.data._id)
		}

		console.log("call API here")

		/* find all the data in our database */
		// const resultUser = await User.find({})
		// console.log("resultUser: ", resultUser)
		// const users = resultUser.map((doc) => {
		// 	const user = doc.toObject()
		// 	user._id = user._id.toString()
		// 	return user
		// })
	}
	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			{children}
		</form>
	)
}

export default FormLogin
