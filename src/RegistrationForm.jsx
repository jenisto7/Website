import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [submittedData, setSubmittedData] = useState(null);

  const password = watch('password');

  const onSubmit = (data) => {
    setSubmittedData(data);  // Show data below form
    reset();                 // Clear form
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Full Name */}
        <div>
          <label>Full Name</label><br />
          <input {...register("fullName", { required: "Full Name is required" })} />
          <p style={{ color: "red" }}>{errors.fullName?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email</label><br />
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label>Password</label><br />
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label><br />
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: value => value === password || "Passwords do not match",
            })}
          />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

        {/* Gender */}
        <div>
          <label>Gender</label><br />
          <input type="radio" value="Male" {...register("gender", { required: "Gender is required" })} /> Male
          <input type="radio" value="Female" {...register("gender")} /> Female
          <input type="radio" value="Other" {...register("gender")} /> Other
          <p style={{ color: "red" }}>{errors.gender?.message}</p>
        </div>

        {/* Interests */}
        <div>
          <label>Interests</label><br />
          <input type="checkbox" value="Sports" {...register("interests")} /> Sports
          <input type="checkbox" value="Music" {...register("interests")} /> Music
          <input type="checkbox" value="Coding" {...register("interests")} /> Coding
          <input type="checkbox" value="Reading" {...register("interests")} /> Reading
        </div>

        {/* Country */}
        <div>
          <label>Country</label><br />
          <select {...register("country", { required: "Country is required" })}>
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
          </select>
          <p style={{ color: "red" }}>{errors.country?.message}</p>
        </div>

        {/* Terms & Conditions */}
        <div>
          <input
            type="checkbox"
            {...register("terms", { required: "You must accept terms & conditions" })}
          /> I accept the Terms & Conditions
          <p style={{ color: "red" }}>{errors.terms?.message}</p>
        </div>

        <button type="submit">Register</button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: '30px' }}>
          <h3>Submitted Data</h3>
          <pre style={{ backgroundColor: '#f4f4f4', padding: '15px' }}>
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
