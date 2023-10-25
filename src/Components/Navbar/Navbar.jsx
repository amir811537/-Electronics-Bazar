import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { AiFillHome } from 'react-icons/ai';
import { SlLogin } from 'react-icons/sl';
import { BsCartCheck } from 'react-icons/bs';
import { MdAddBusiness } from 'react-icons/md';
import { HiShoppingBag } from 'react-icons/hi';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handelsingout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/"> <AiFillHome></AiFillHome> Home</NavLink>
      </li>
      <li>
        <NavLink to="/AddProduct"> <MdAddBusiness></MdAddBusiness> Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart"> <BsCartCheck></BsCartCheck> My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login"> <SlLogin></SlLogin> Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-red-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black lg:text-white w-52"
          >
            {navlinks}
          </ul>
        </div>
       <div className="flex items-center justify-center">


       <label tabIndex={0} className="btn btn-ghost">
          <div className="w-full rounded">
            {/* <img src="https://i.ibb.co/vqz3DZm/Screenshot4225x225.png" /> */}
            <HiShoppingBag className="text-3xl"></HiShoppingBag>

          </div>
        </label>{" "}
        <h1 className="text-3xl">E-Bazar</h1>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black lg:text-white">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user ? (
              <img src={user.photoURL} />
            ) : (
              <img src="https://i.ibb.co/gjNbZy2/user.png" />
            )}
          </div>
        </label>
        {console.log("user===========>", user)}
        {user ? (
          <button className="text-white" onClick={handelsingout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
