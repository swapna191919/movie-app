import React from "react"
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (


        <div className="header">
            <h1 className="h1">T-movies</h1>
            <div className="headerLeft">

                <Link to="/"  style={{textDecoration: "none"}}><span>Home</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                



        
        
        </div>


        </div>
    )
}

export default Header