import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      {/* <Link to="/login">← Go to Login</Link> */}

      <div classname="input-field">
      <form onSubmit={handleFormSubmit}>
      <h2>Sign Up</h2>
          <label htmlFor="firstName"></label>
          <input
            placeholder="First Name"
            name="firstName"
            // type="firstName"
            id="firstName"
            onChange={handleChange}
          />
          <label htmlFor="lastName"></label>
          <input
            placeholder="Last Name"
            name="lastName"
            // type="lastName"
            id="lastName"
            onChange={handleChange}
          />

          <label htmlFor="email"></label>
          <input
            placeholder="youremail@example.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />

          <label htmlFor="pwd"></label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        <div>
          <button className="btn waves-effect waves-light #ffb300 amber darken-1" type="submit">Sign Up</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Signup;
