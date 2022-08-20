import Link from "next/link"
import Head from "next/head"
import dbConnect from "../lib/dbConnect"
import Pet from "../models/Pet"

import InputLogin from "../components/Inputs/InputLogin"
import FormLogin from "../components/Forms/FormLogin"

const Index = ({ pets }) => {
	return (
		<>
			<Head>
				<title>MB - Startseite</title>
			</Head>

			<main className="container mx-auto flex h-full flex-col items-center justify-center py-8 ">
				<div className="flex flex-col border border-gray-500 bg-black bg-opacity-80 text-white">
					<h1 className="text-center text-9xl">login</h1>
					<FormLogin>
						<div>
							<InputLogin
								type="email"
								id="userEmail"
								name="userEmail"
								labelText="Email"
								placeholder="Email"
								required="required"
							/>

							<InputLogin
								type="password"
								id="userPassword"
								name="userPassword"
								labelText="Passwort"
								placeholder="Passwort"
								required="required"
								pattern="[a-z0-9]{1,15}"
							/>
						</div>
						<button
							className="
							place-self-center 
							p-1 text-3xl 
							transition 
							delay-75 duration-700
							ease-linear  
							hover:bg-gray-100 
							hover:text-black"
							type="submit"
						>
							Absenden
						</button>
					</FormLogin>
				</div>
			</main>

			{/* Create a card for each pet */}
			{pets.map((pet) => (
				<div key={pet._id}>
					<div className="card">
						<img src={pet.image_url} />
						<h5 className="pet-name">{pet.name}</h5>
						<div className="main-content">
							<p className="pet-name">{pet.name}</p>
							<p className="owner">Owner: {pet.owner_name}</p>

							{/* Extra Pet Info: Likes and Dislikes */}
							<div className="likes info">
								<p className="label">Likes</p>
								<ul>
									{pet.likes.map((data, index) => (
										<li key={index}>{data} </li>
									))}
								</ul>
							</div>
							<div className="dislikes info">
								<p className="label">Dislikes</p>
								<ul>
									{pet.dislikes.map((data, index) => (
										<li key={index}>{data} </li>
									))}
								</ul>
							</div>

							<div className="btn-container">
								<Link href="/[id]/edit" as={`/${pet._id}/edit`}>
									<button className="btn edit">Edit</button>
								</Link>
								<Link href="/[id]" as={`/${pet._id}`}>
									<button className="btn view">View</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
	await dbConnect()

	/* find all the data in our database */
	const resultPet = await Pet.find({})

	const pets = resultPet.map((doc) => {
		const pet = doc.toObject()
		pet._id = pet._id.toString()
		return pet
	})

	return { props: { pets: pets } }
}

export default Index
