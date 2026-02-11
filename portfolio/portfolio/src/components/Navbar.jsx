import React from "react";

export default function Navbar({ setTab }) {
return (

    <nav className="navbar">
        <ul>
            <li onClick={() => setTab("about")}>About Me</li>
            <li onClick={() => setTab("projects")}>My Projects</li>
            <li onClick={() => setTab("contat")}>Contact Me</li>
        </ul>


    </nav>

);




}