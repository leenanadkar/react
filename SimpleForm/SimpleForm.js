import {useState} from "react";
function SimpleForm()
{
	const[name, setName] = useState("");
	//useState - Store the name
	const handleChange = (e) => {
		setName(e.target.value);
		//Update the state as user types
	};
	const handleSubmit =(e) => {
		e.preventDefault();
		alert(`Form Submitted Name: ${name}`);
	};

	return(
		<form onSubmit = {handleSubmit}>
			<label>
				Name:
				<input type = "text" value={name} onChange={handleChange} />
			</label>
			<button type = "submit">Submit</button>
		</form>

		);


}
export default SimpleForm;
