import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";
import schema from "./schema";

function App() {
  //////Initial States///////

  const initialFormValues = {
    username: "",
    email: "",
    password: "",
    termsOfService: false,
  };

  const initialFormErrors = {
    username: "",
    email: "",
    password: "",
    termsOfService: false,
  };

  const initialUsers = [];
  const initialDisabled = true;

  ////////State Hooks////////
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  /////////Helpers///////////
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        setFormValues(initialFormValues);
      });
  };

  /////////Event Handlers//////////
  const handleChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    };
    postNewUser(newUser);
  };

  ////////Side Effects//////////
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <Form
        values={formValues}
        submit={handleSubmit}
        change={handleChange}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map((user) => {
        return (
          <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>{user.termsOfService && "Agreed to Terms of Service"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
