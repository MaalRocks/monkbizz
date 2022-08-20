import FormPet from "../components/Forms/FormPet"

const NewPet = () => {
	const petForm = {
		name: "",
		owner_name: "",
		species: "",
		age: 0,
		poddy_trained: false,
		diet: [],
		image_url: "",
		likes: [],
		dislikes: [],
	}

	return <FormPet formId="add-pet-form" petForm={petForm} />
}

export default NewPet
