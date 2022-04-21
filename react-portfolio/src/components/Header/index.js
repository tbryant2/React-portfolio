import React from 'react'; 
import coverImage from "../../assets/background/bgpattern.jpg"; 
import './header.css'; 

function Header(props) {
    return(
        <header className="flex-row space-between px-1">
            <h1>Travis Bryant</h1>
            {/* <img src={coverImage} alt="background picture"></img> */}
            {props.children}
            </header>
    ); 
}

export default Header; 