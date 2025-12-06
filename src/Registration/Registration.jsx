import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from  "..//store/registrationSlice";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  async function registrUser(e) {
    e.preventDefault();

    const payload = {
      UserName: e.target["username"].value,
      PhoneNumber: e.target["phone"].value,
      Email: e.target["email"].value,
      Password: e.target["password"].value,
      ConfirmPassword: e.target["confirmPassword"].value,
    };

    const result = await dispatch(registerUser(payload));

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/"); 
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={registrUser}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Registration</h1>

        <input
          name="username"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          type="text"
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          type="tel"
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          type="email"
        />

        <input
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          type="password"
        />

        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          type="password"
        />

        {error && (
          <p className="text-red-500 text-sm">{JSON.stringify(error)}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Registration;
