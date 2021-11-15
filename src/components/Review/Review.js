import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import './Review.css'

const Review = () => {
  const { register, handleSubmit} = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("https://mighty-coast-78516.herokuapp.com/addSReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center py-5">Review</h1>
      <form className="addReview" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field w-50 py-2"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <textarea
          className="input-field w-50 py-2"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3 py-2"
          type="submit"
          value="Review"
        />
      </form>
    </div>
  );
};

export default Review;