import React, {useEffect, useState, useRef, useContext} from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo2.png";
import Flier from "../../assets/images/flier2.jpeg";
import {Link, NavLink, useLocation} from "react-router-dom";
import {Title} from "../Title";
import VotingModal from "../VotingModal/VotingModal";
import {AuthUserContext} from "../../services/AuthUserContext";

export const Navbar = () => {
    const {authVoter, authAdmin, authContestant} = useContext(AuthUserContext); // Access authenticated user
    const prevUrlRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Step 2: Create a function to handle checkbox changes
    const handleCheckboxChange = (event) => {
        setIsMenuOpen(event.target.checked);
    };

    // Step 3: Use useEffect to track checkbox status changes
    useEffect(() => {
        // Code to run when isMenuOpen changes
        // console.log(`Checkbox is now ${isMenuOpen ? "checked" : "unchecked"}`);
    }, [isMenuOpen]); // Dependency array contains isMenuOpen

    // Function to close menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const location = useLocation();
    let currentUrl;
    useEffect(() => {
        currentUrl = location.pathname;
        // console.log('authVoter',authVoter, 'authAdmin',authAdmin,'authContestant', authContestant)
    });

    useEffect(() => {
        if (prevUrlRef.current !== currentUrl) {
            prevUrlRef.current = currentUrl;
            setTimeout(() => {
                switch (currentUrl) {
                    case "/dashboard-layout/admin-dashboard":
                    case "/dashboard-layout/voting":
                    case "/dashboard-layout/configurations":
                    case "/dashboard-layout/stages":
                    case "/voting-page":
                        setShowNav(false);
                        break;
                    default:
                        setShowNav(true);
                        break;
                }
                console.log(currentUrl, showNav);
            }, 10);
        }
    });
    return (
        <div className={`  ${showNav ? "" : "hide"}`}>
            <div style={{height: "30px", background: "#DC727C"}} className="d-flex p-4">
                <div style={{flexGrow: 1}}/>
                <ul className="list-unstyled list-inline flex-end">
                    {authAdmin && <li className="list-inline-item">
                        <Link
                            to={"dashboard-layout/admin-dashboard"}
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                fontFamily: "soraB",
                                paddingRight:"10px",
                                borderRight:"1px solid #fff",
                            }}
                        >
                            ADMIN
                        </Link>

                    </li>}
                    {(!authAdmin && !authContestant) &&
                    <li className="list-inline-item">
                        <Link to={"/registration"} style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontFamily: "soraB",
                            paddingRight:"10px",
                            borderRight:"1px solid #fff",
                        }}>
                            <span className={`${currentUrl?.contains('registration')?"text-danger":""}`}>REGISTER</span>
                        </Link>
                    </li>}
                    <li className="list-inline-item">
                        <Link
                            to={"/voting-page"}
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                fontFamily: "soraB",
                                paddingRight:"10px",
                                borderRight:"1px solid #fff",
                            }}
                        >
                            VOTING PAGE
                        </Link>

                    </li>

                    {authContestant && <li className="list-inline-item">
                        <Link
                            to={"/my-profile"}
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                fontFamily: "soraB",
                                paddingRight:"10px",
                                borderRight:"1px solid #fff",
                            }}
                        >
                            MY PROFILE
                        </Link>

                    </li>}
                </ul>
            </div>
            <div style={{height: "10px", background: "#DEF2FA"}}/>

            <div className="app-nav d-flex">
                <div
                    className="col-md-2 offset-md-1 nav-inner"
                   
                >
                    {" "}
                    <Link to={"/"}>
                        <img className="img2 app-logo" src={Logo} alt="Scholar"/>
                    </Link>
                </div>
                <center>
                    <h1 style={{color: " black", fontSize: "90px"}}></h1>
                </center>

                <input
                    type="checkbox"
                    id="myInput"
                    checked={isMenuOpen}
                    onChange={handleCheckboxChange}
                />
                <label for="myInput" className="offset-md-7 tog " title="menu">
                    <span class="bar top"></span>
                    <span class="bar middle"></span>
                    <span class="bar bottom"></span>
                </label>

                <aside>
                    <div class="aside-section aside-left col-md-4">
                        <div class="aside-content">
                            <img
                                className="img col-md-12 offset-md-"
                                src={Flier}
                                alt="Scholar"
                                width="100%"
                            />
                        </div>
                    </div>
                    <div class="aside-section aside-right col-md-8 ">
                        <div className="col-md-4 offset-md-4">
                            {" "}
                            <ul class="aside-list ">
                                <li>
                                    <Link to={"/"} class="aside-anchor" onClick={closeMenu}>
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/about"} class="aside-anchor" onClick={closeMenu}>
                                        ABOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/faq"} class="aside-anchor" onClick={closeMenu}>
                                        FAQs
                                    </Link>
                                </li>
                                <li onClick={closeMenu}>
                                    <Link to={"/sponsors"} class="aside-anchor">
                                        SPONSORS
                                    </Link>
                                </li>
                                {" "}
                                <li onClick={closeMenu}>
                                    <Link to={"/contact"} class="aside-anchor">
                                        CONTACT
                                    </Link>
                                </li>
                                {!authVoter && !authContestant && !authAdmin &&
                                <>
                                    <li onClick={closeMenu}>
                                        <Link to={"/login"} class="aside-anchor">
                                            LOGIN
                                        </Link>
                                    </li>
                                    <li onClick={closeMenu}>
                                        <Link to={"/registration"} class="aside-anchor">
                                            REGISTER
                                        </Link>
                                    </li>
                                </>
                                }
                                {authVoter && <li onClick={closeMenu}>
                                    <Link to={"/voting-page"} class="aside-anchor">
                                        VOTING PAGE
                                    </Link>
                                </li>}
                                {(authVoter || authAdmin || authContestant) && <li onClick={closeMenu}>
                                    <Link to={"/logout"} class="aside-anchor">
                                        <span className="text-danger">LOGOUT</span>
                                    </Link>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
