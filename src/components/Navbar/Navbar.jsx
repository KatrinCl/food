import React, { useContext, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  //underline active
const [menu, setMenu] = useState("menu");

const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to='/'><img src="/logo1.png" alt="" className='logo' /></Link>

        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"? "active":""}>contact us</a>
        </ul>

        <div className="navbar-right">
            <img src="/loop.svg" alt="" className='loop' />

            <div className="navbar-search-icon">
                <Link to='/cart'><img src="/basket.svg" alt="" className='basket' /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>

    </div>
  )
}

export default Navbar