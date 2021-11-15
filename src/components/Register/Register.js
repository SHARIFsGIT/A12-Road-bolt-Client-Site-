// import React from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//     return (
//         <div className="login-form">
//             <div>
//                 <h2>Register: Create Account</h2>
//                 <form onSubmit="">
//                     <input type="email" placeholder="Your Email" />
//                     <br />
//                     <input type="password" placeholder="Your Password" />
//                     <br />
//                     <input type="password" placeholder="Re-enter Password" />
//                     <br />
//                     <input type="submit" value="Submit" />
//                 </form>
//                 <p>Already have an account? <Link  to="/login">Login</Link></p>
//                 <div>----------or-------------</div>
//                 <button className="btn-regular">Google Sign In</button>
//             </div>
//         </div>
//     );
// };

// export default Register;

import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { googleSignIn, handleUserRegister } = useAuth();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
