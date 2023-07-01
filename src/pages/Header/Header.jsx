import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/barnadin.png';
const Header = () => {
      
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut().then(()=>{}).catch((error)=>{
            // console.log(error.message)
        })
    }
    return (
        <div>

            <div className="navbar bg-gray-100 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="cursor-pointer">  <img className='h-16' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  font-bold">
                        <li className='mx-2'>
                            <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/blog'} className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Blog</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/gallery'} className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Gallery</NavLink> 
                        </li>

                    </ul>
                </div>
                <div className="navbar-end ">
                    
                    <span>
                    {user ? <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="w-10 h-10 rounded-full border border-black" src={user?.photoURL} alt="image"/>
                        </div>
                        <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{user?.email}</div>
                            <div className="text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors duration-300">Mr: {user?.displayName}</div>
                            
                        </div>
                    </div>: ''}
                    </span> 

                    <ul className='menu menu-horizontal px-1  font-bold'>
                        { user? 
                        (<li className='mx-1'><Link onClick={handleLogOut} >logOut</Link></li>)
                        :
                        (<li className='mx-1'><Link to="/login">Login</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;