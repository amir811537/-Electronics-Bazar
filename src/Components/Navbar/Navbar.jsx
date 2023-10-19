import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navlinks =<>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/AddProduct">Add Product</NavLink></li>
    <li><NavLink to="/myCart">My Cart</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    
    </>

    return (
        <div className="navbar bg-red-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black lg:text-white w-52">
             {
                navlinks
             }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-white text-xl"><img  className="w-1/3" src="https://i.ibb.co/tmFHQ4m/Screenshot-1.png" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black lg:text-white">
            {
                navlinks
            }
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src=""/>
        </div>
      </label>
{/* {
  user?
  <button onClick={handelsignout}>Sign Out</button>
:
<Link to='/login'>
   <button>Login</button>
   </Link>

} */}




        </div>
      </div>
    );
};

export default Navbar;