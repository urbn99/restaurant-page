import React, { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars } from 'react-icons/fa';



const Navigation = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav>
            <div className='nav-center'>

                <div className='nav-header'>

                    <h3 className='logo'>TAGIATELLE BISTRO</h3>

                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>


                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>

                        
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >O NAS</Link>
                        <Link
                            activeClass="active"
                            to="menu"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >MENU</Link>
                        <Link
                            activeClass="active"
                            to="location"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >LOKALIZACJA</Link>
                        <Link
                            activeClass="active"
                            to="faq"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >MASZ PYTANIE ?</Link>
                        
                        
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navigation
