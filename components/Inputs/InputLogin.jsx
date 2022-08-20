const InputLogin = ({
	type,
	id,
	name,
	pattern,
	labelText,
	placeholder,
	required,
	minLength,
	maxLength,
}) => {
	return (
		<>
			<label className="hidden" htmlFor={name}>
				{labelText}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				pattern={pattern}
				placeholder={placeholder}
				required={required}
				minLength={minLength}
				maxLength={maxLength}
				className="
					bg-gray-100 
					text-center 
					text-black 
					outline-0
					transition
					delay-75 
					duration-300 
					ease-in-out 
					hover:-translate-y-1 
					hover:scale-110
					hover:bg-white
					focus:-translate-y-1
					focus:scale-110
					focus:bg-white
					focus:outline-1"
			/>
		</>
	)
}

export default InputLogin
