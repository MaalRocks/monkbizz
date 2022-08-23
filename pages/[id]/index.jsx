import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import Head from "next/head"
import dbConnect from "../../lib/dbConnect"
import User from "../../models/User"
import Goal from "../../models/Goal"
import Card from "../../components/Card"

/* Allows you to view user card info and delete user card*/
const Dashboard = ({ user }) => {
	const router = useRouter()
	const [message, setMessage] = useState("")
	const [goals, setGoals] = useState(
		fetch(`/api/goals/${user._id}`, { method: "GetByUserID" }).then((res) =>
			res.json()
		)
	)

	console.log("Daschboard: klappt")

	useEffect(() => {
		fetch(`/api/goals/${user._id}`, { method: "GetByUserID" })
			.then((res) => res.json())
			.then((data) => setGoals(data))

		console.log("goals: ", goals)
	}, [goals])

	const handleDelete = async () => {
		const userID = router.query.id

		try {
			await fetch(`/api/users/${userID}`, {
				method: "Delete",
			})
			router.push("/")
		} catch (error) {
			setMessage("Failed to delete the user.")
		}
	}

	return (
		<div className="flex">
			<Head>
				<title>Dashboard</title>
			</Head>
			<Card title={user.name} />

			<div key={user._id}>{message && <p>{message}</p>}</div>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	await dbConnect()

	const user = await User.findById(params.id).lean()
	user._id = user._id.toString()

	return { props: { user } }
}

export default Dashboard
