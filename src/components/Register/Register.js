import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { handleUserRegister } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
    const history = useHistory();
  const redirect_uri = location.state?.from || '/shop';

  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password);
    console.log(data);
    history.push(redirect_uri);

  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          placeholder="Name"
          type="text"
          {...register("name", { required: true })}
        />
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
