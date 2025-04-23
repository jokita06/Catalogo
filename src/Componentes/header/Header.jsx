import React from "react";
import './header.css';
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathname);

    return (
        <div ref={headerRef} className="Header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src="" alt="logo" srcset="" />
                    <Link to="/">Movies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}></Link>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}