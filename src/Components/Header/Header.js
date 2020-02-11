import React from "react";
import {Link} from "react-router-dom";
import Search from "../Search/Search";
import './Header.css';

export default class Header extends React.Component{
    render(){
        return(
            <nav className='header navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='navbar-brand' to='/'>Wiki page</Link></li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/persons/'>Persons</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/quests/'>Quests</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/regions/'>Regions</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/cities/'>Cities</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/items/'>Items</Link>
                    </li>
                </ul>
                <Search/>
            </nav>
        );
    }
}