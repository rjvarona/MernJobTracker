import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/yeets" className="navbar-brand">Yeets</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/AddUsers" className="nav-link">AddUsers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Users" className="nav-link">View Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
