import React, {useState} from "react";

//React - allows to build UI components
//useState - to Manage component's state  - Form data

function RegistrationForm()
{
	const[formData,setFormData] = useState(
	{
		firstName: " ",
		lastName: " ",
		email:" ",
		password:" ",
		gender:" ",
		hobbies: [],
		country:" ",
		bio:" ",
		agreeToTerms: false,
	}
	);
	const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "hobbies") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
	const handleSubmit = (event) =>
	{
		event.preventDefault();
		alert(JSON.stringify(formData,null,2));

	};
	return(
		<form onSubmit={handleSubmit}>
<h1>Registration Form</h1>

      {/* Text Inputs */}
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
        required
      />
      <br />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
        required
      />
      <br />

      {/* Email Input */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      <br />

      {/* Password Input */}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />
      <br />

      {/* Radio Buttons */}
      <fieldset>
        <legend>Gender:</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
          Other
        </label>
      </fieldset>
      <br />

      {/* Checkboxes */}
      <fieldset>
        <legend>Hobbies:</legend>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            checked={formData.hobbies.includes("reading")}
            onChange={handleChange}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="traveling"
            checked={formData.hobbies.includes("traveling")}
            onChange={handleChange}
          />
          Traveling
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="gaming"
            checked={formData.hobbies.includes("gaming")}
            onChange={handleChange}
          />
          Gaming
        </label>
      </fieldset>
      <br />

      {/* Dropdown */}
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select your country
        </option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
      </select>
      <br />

      {/* Textarea */}
      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Tell us about yourself"
        rows="5"
        required
      ></textarea>
      <br />

      {/* Agreement Checkbox */}
      <label>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        I agree to the terms and conditions
      </label>
      <br />

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
		);
}
export default RegistrationForm;
