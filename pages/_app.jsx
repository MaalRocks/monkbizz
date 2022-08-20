import "../css/globals.css"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* <div className="top-bar">
				<div className="nav">
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/newPet">
						<a>Add Pet</a>
					</Link>
				</div>

				<img
					id="title"
					src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
					alt="pet care logo"
				></img>
			</div> */}

			<div>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</>
	)
}

export default MyApp
