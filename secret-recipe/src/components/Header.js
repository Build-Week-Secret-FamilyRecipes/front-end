import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

function Header() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href =  '/';
      }; 
    return (
        <div>
            <form className = "search-bar">
                <input className = "bar">
                </input>
                <button>Search</button>
                <button onClick = {logout}>Logout</button>
            </form>
            <Link to = "/">Home</Link>
            <Link to = "/login">Login</Link>
            
        </div>
    )
}

export default Header