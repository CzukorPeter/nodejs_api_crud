import React from "react";

const AppNavbar = () => {
    return (
    <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
                <i className="material-icons ">assignment_ind</i>
                Partner Organizer
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </div>
      </nav>
    )
}

export default AppNavbar