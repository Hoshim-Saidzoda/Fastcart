import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import {Person, Twitter,Instagram,LinkedIn,FavoriteBorder,ShoppingCart,Search} from '@mui/icons-material';
const Layout = () => {
  const cartItems = useSelector((state) => state.cart.items  );
  const wishlist = useSelector((state) => state.wishlist.items  );

  const navClass = ({ isActive }) =>
    isActive
      ? "text-red-600 font-semibold"
      : "text-gray-700 hover:text-red-600 transition";

  return (
    <div className="min-h-screen flex flex-col">
       <nav className="w-full shadow-md bg-white px-6 py-4 flex items-center justify-around">

     
  <img src={logo} alt="Logo" className="w-30" />

<div className="flex items-center gap-6">

  <NavLink to="/" className={navClass}></NavLink>
  <NavLink to="/home" className={navClass}>Home</NavLink>
  <NavLink to="/About" className={navClass}>About</NavLink>
  <NavLink to="/Contact" className={navClass}>Contact</NavLink>
  <NavLink to="/registration" className={navClass}>Sign Up</NavLink>
</div>

         <div className="flex items-center gap-4">
          <div className="relative w-full max-w-md">
  <input
    type="text"
    placeholder="What are you looking for?"
    className="w-full pl-10 pr-4 py-1 border hover:border-red-600 rounded"
  />
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600" />
</div>


<div className="flex gap-8 ">

          <Link
            to="/Wishlist"
            className="relative text-gray-700 hover:text-red-600 text-2xl"
          >
          <FavoriteBorder />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
          </Link>

           <Link
            to="/cart"
            className="relative text-gray-700 hover:text-red-600 text-2xl"
          >
            <ShoppingCart />
          
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            
          </Link>
 
  <Link 
  to="/" 
  className="w-10 h-10 rounded-full hover:bg-red-600 transition flex items-center justify-center"
>
  <Person className="text-orange" />
</Link>

  </div>
        </div>
      </nav>

       <div className="flex-1">
        <Outlet />
      </div>

       <footer className="bg-black text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

           <div>
            <h2 className="text-xl font-bold mb-4">Exclusive</h2>
            <p className="mb-2">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>

            <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-2 outline-none text-sm w-full"
              />
              <button className="px-4 py-2 text-lg">→</button>
            </div>
          </div>

           <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-sm mt-2">exclusive@gmail.com</p>
            <p className="text-sm mt-2">+88015-88888-9999</p>
          </div>

           <div>
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <ul className="space-y-2 text-sm">
              <li>My Account</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

           <div>
            <h2 className="text-xl font-bold mb-4">Quick Link</h2>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

           <div>
            <h2 className="text-xl font-bold mb-4">Social</h2>
            <div className="flex items-center gap-4 text-[28px] text-gray-600">
              <a href="https://pro.twitter.com/"> <Twitter className="cursor-pointer hover:text-blue-500" />
</a>
            
            <a href="https://www.instagram.com/"> <Instagram className="cursor-pointer hover:text-pink-500" /> </a>
                
                    <a href="https://ru.linkedin.com/">  <LinkedIn className="cursor-pointer hover:text-blue-700" />
 </a>
                   </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          Copyright Rimel 2022. All right reserved
        </div>
      </footer>
    </div>
  );
};

export default Layout;
