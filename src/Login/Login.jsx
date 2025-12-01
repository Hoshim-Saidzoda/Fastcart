import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "..//store/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, token } = useSelector((state) => state.auth);

  async function login(e) {
    e.preventDefault();

    const username = e.target["username"].value;
    const password = e.target["password"].value;

    const result = await dispatch(loginUser({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/home");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={login}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <input
          name="username"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          type="text"
        />

        <input
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          type="password"
        />

        {error && (
          <p className="text-red-500 text-sm">
            {JSON.stringify(error)}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#DB4444] text-white py-2 rounded-lg hover:bg-[#ee0909] transition disabled:bg-gray-400"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
