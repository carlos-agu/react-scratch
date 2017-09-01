import React from 'react';

const NavBar = ()=>{
    return (
        <div className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="#" className="navbar-brand">React Example</a>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <a href="#" className="nav-link active">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Create</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Imagine</a>
                    </li>                   
                </ul>
            </div>
        </div>
    );
}

export default NavBar;