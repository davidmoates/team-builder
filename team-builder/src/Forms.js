import React from "react";

function Forms({ formValues, setFormValues }) {

  const onValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.name}, ${formValues.email}, ${formValues.role}`);
  };
  return (
    <form className="component" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter Name"
        onChange={onValueChange}
        name="name"
      />
      <input
        type="email"
        placeholder="Enter Email"
        onChange={onValueChange}
        name="email"
      />
    <select name="role" onChange={onValueChange}>
        <option defaultValue="frontend">FrontEnd Developer</option>
        <option value="backend">BackEnd Developer</option>
        <option value="scientist">Data Scientist</option>
        <option value="designer">Designer</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default Forms;
