import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <div>
        <div id="usernameError">{errors.username}</div>
        <div id="emailError">{errors.email}</div>
        <div id="passwordError">{errors.password}</div>
        <div id="tosError">{errors.termsOfService}</div>
      </div>
      <label>
        Name
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
        />
      </label>

      <label>
        Email
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </label>

      <label>
        Password
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={onChange}
        />
      </label>

      <label>
        Terms of Service
        <input
          type="checkbox"
          name="termsOfService"
          checked={values.termsOfService}
          onChange={onChange}
        />
      </label>

      <button id="submit" disabled={disabled}>
        Submit
      </button>
    </form>
  );
}
