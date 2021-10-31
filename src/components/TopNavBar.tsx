import React, {useEffect, useState} from 'react';
import smallLogo from './../assets/logo69.png';
import './topnavbar.css';


function TopNavBar() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 900) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    let navBarClasses = ['navbar'];

    if (scrolled) {
        navBarClasses.push('scrolled');
    }

    return (
        <header className={navBarClasses.join(" ")}>
            <div className="logo">
                <img src={smallLogo} className="logo" alt="logo"/>
            </div>
            <nav className="navigation">
                <a href={"https://ketwork.github.io/profile/schedule.html"}>Resets</a>
            </nav>
        </header>
    );
}

export default TopNavBar;