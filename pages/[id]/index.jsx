import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"
import dbConnect from "../../lib/dbConnect"
import User from "../../models/User"
import Goal from "../../models/Goal"

/* Allows you to view user card info and delete user card*/
const Dashboard = ({ user, goalsJSON }) => {
	console.log("user-: ", user)
	console.log("goalJAson-: ", goalsJSON)

	const router = useRouter()
	const [message, setMessage] = useState("")

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
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<div key={user._id}>
				<div className="card">
					<img src={user.avatar_image_url} />
					<h5 className="user-name">Name: {user.name}</h5>
					<div className="main-content">
						<p className="user-name">{user.name}</p>
						{/* Extra Pet Info: Likes and Dislikes */}
						<div className="likes info">
							<p className="label">Likes</p>
							<ul>
								{user.likes.map((data, index) => (
									<li key={index}>{data} </li>
								))}
							</ul>
						</div>
						{/* <div className="">
							<p className="label">Goals</p>
							<ul>
								{goalsJSON.map((data, index) => (
									<li key={index}>{data} </li>
								))}
							</ul>
						</div> */}
						<div className="dislikes info">
							<p className="label">Dislikes</p>
							<ul>
								{user.dislikes.map((data, index) => (
									<li key={index}>{data} </li>
								))}
							</ul>
						</div>
						<div className="btn-container">
							<Link href="/[id]/edit" as={`/${user._id}/edit`}>
								<button className="btn edit">Edit</button>
							</Link>
							<button className="btn delete" onClick={handleDelete}>
								Delete
							</button>
						</div>
					</div>
				</div>
				{message && <p>{message}</p>}
			</div>
		</>
	)
}

export async function getServerSideProps({ params }) {
	await dbConnect()

	const user = await User.findById(params.id).lean()
	user._id = user._id.toString()

	const goals = await Goal.find({ user: user._id }).lean()
	const goalsJSON = JSON.stringify(goals)

	user.goals = goalsJSON

	console.log("user:", user)
	console.log("goalsJSON:", goalsJSON)

	return { props: { user, goalsJSON } }
}

export default Dashboard
