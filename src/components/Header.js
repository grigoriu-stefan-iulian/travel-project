import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="container__inner">
                    <div className="">
                        <div className="header__first-row clearfix">
                            <div className="pull-left">
                                <a href="tel:+1234578900" className="header--phone">
                                    <img src="../images/icons/phone.png" alt="phone"></img>
                                    <span>+123 457 8900</span>
                                </a>
                                <a href="mailto:free@psdfreebies.com" className="header--email">
                                    <img src="./images/icons/email.png" alt="email"></img>
                                    <span>free@psdfreebies.com</span>
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
                                        <img src="images/icons/user-profile.png" alt="Login"></img>
                                        <span>Login</span>
                                    </a>
                                    <a href="#">
                                        <img src="images/icons/key.png" alt="SignUp"></img>
                                        <span>Sign Up</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header__second-row clearfix">
                            <div className="header--logo pull-left">
                                <a href="#"><img src="images/Logo.png" alt="Explore Icon" title="Explore Website"></img></a>
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