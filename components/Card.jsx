import Link from "next/link"

const Card = ({
	title,
	name,
	email,
	age,
	avatarImageUrl,
	diet,
	dislikes,
	like,
	contentId,
}) => {
	// const handleDelete = async () => {
	// 	const dataID = router.query.id

	// 	try {
	// 		await fetch(`/api/datas/${dataID}`, {
	// 			method: "Delete",
	// 		})
	// 		router.push("/")
	// 	} catch (error) {
	// 		setMessage("Failed to delete the data.")
	// 	}
	// }
	return (
		<div className="m-4 text-white bg-black bg-opacity-70 w-80 h-96 flex flex-col flex-grow">
			<img src={avatarImageUrl} />
			<h5 className="text-center text-3xl m-1">{title}</h5>
			<div className="bg-black bg-opacity-40 flex flex-col flex-grow w-full">
				<p className="border border-black">{name}</p>
				{/* Extra Pet Info: Likes and Dislikes */}
				{/* <div className="border border-black">
					<p className="label">Likes</p>
					<ul>
						{data.likes.map((data, index) => (
							<li key={index}>{data} </li>
						))}
					</ul>
				</div> */}
				{/* <div className="border border-black">
					<p className="label">Dislikes</p>
					<ul>
						{data.dislikes.map((data, index) => (
							<li key={index}>{data} </li>
						))}
					</ul>
				</div> */}
				<div className="h-12 flex justify-around flex-grow">
					<Link href="/[id]/edit" as={`/${contentId}/edit`}>
						<button className="btn edit">Edit</button>
					</Link>
					<button className="btn delete">Delete</button>
				</div>
			</div>
		</div>
	)
}

export default Card
