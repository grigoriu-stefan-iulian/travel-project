import React from 'react'
import { NavLink } from 'react-router-dom'
import phoneIcon from '../images/icons/phone.png'
import emailIcon from '../images/icons/email.png'
import loginIcon from '../images/icons/user-profile.png'
import singUpIcon from '../images/icons/key.png'
import logoIcon from "../images/Logo.png"

class Header extends React.Component {
    render() {
        return (
            <div className="masked">
                <header className="container__inner">
                    <div className="">
                        <div className="header__first-row clearfix">
                            <div className="pull-left">
                                <a href="tel:+1234578900" className="header--phone">
                                    <img src={phoneIcon} alt="phone"></img>
                                    <span> +123 457 8900</span>
                                </a>
                                <a href="mailto:free@psdfreebies.com" className="header--email">
                                    <img src={emailIcon} alt="email"></img>
                                    <span> free@psdfreebies.com</span>
                                </a>
                            </div>
                            <div className="pull-right flex-block">
                                <div className="header__social-media">
                                    <a className="icon--fb" href="http://facebook.com" target="_blank" title="Facebook"></a>
                                    <a className="icon--google" href="http://google.com" target="_blank" title="Google"></a>
                                    <a className="icon--wiki" href="http://wiki.com" target="_blank" title="Wiki"></a>
                                    <a className="icon--youtube" href="http://youtube.com" target="_blank" title="Youtube"></a>
                                </div>
                                <div className="header__actions">
                                    <a href="#">
                                        <img src={loginIcon} alt="Login"></img>
                                        <span>Login</span>
                                    </a>
                                    <a href="#">
                                        <img src={singUpIcon} alt="SignUp"></img>
                                        <span>Sign Up</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header__second-row clearfix">
                            <div className="header--logo pull-left">
                                <a href="#"><img src={logoIcon} alt="Explore Icon" title="Exploore Website"></img></a>
                            </div>
                            <div className="header__menu pull-right">
                                <NavLink to="/" exact={true}>Home</NavLink>
                                <NavLink to="/destination"  exact={true}>Destination</NavLink>
                                <NavLink to="/discount"  exact={true} >Discount</NavLink>
                                <NavLink to="/about"  exact={true} >About</NavLink>
                                <NavLink to="/blog" exact={true} >Blog</NavLink>
                                <NavLink to="/contact" exact={true} >Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header