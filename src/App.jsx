import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/layout";
import Registration from "./Registration/Registration";
import Cart from "./pages/Cart";
import Login from "./Login/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WishlistPage from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "registration", element: <Registration /> },
      { path: "Contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "Login", element: <Login /> },

    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
