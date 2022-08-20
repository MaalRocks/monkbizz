import { useRouter } from "next/router"

const FormLogin = ({ children }) => {
	const router = useRouter()

	const handleSubmit = async (event) => {
		event.preventDefault()

		const formData = {
			userEmail: event.target.userEmail.value,
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
			console.log("result: ", result.data._id)
			router.push(`/${result.data._id}`)
		}
	}
	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			{children}
		</form>
	)
}

export default FormLogin
