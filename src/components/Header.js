import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="outer-container bg-section-one bg-mask">
                <header className="inner-container">
                    <div className="">
                        <div className="header-first-row clearfix">
                            <div className="pull-left">
                                <a href="tel:+1234578900" className="header-phone">
                                    <img src="../images/icons/phone.png" alt="phone"></img>
                                    <span>+123 457 8900</span>
                                </a>
                                <a href="mailto:free@psdfreebies.com" className="header-email">
                                    <img src="./images/icons/email.png" alt="email"></img>
                                    <span>free@psdfreebies.com</span>
                                </a>
                            </div>
                            <div className="pull-right flex-block">
                                <div className="header-social-media">
                                    <a className="icon-fb" href="http://facebook.com" target="_blank" title="Facebook"></a>
                                    <a className="icon-google" href="http://google.com" target="_blank" title="Google"></a>
                                    <a className="icon-wiki" href="http://wiki.com" target="_blank" title="Wiki"></a>
                                    <a className="icon-youtube" href="http://youtube.com" target="_blank" title="Youtube"></a>
                                </div>
                                <div className="header-actions">
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
                        <div className="header-second-row clearfix">
                            <div className="header-logo pull-left">
                                <a href="#"><img src="images/Logo.png" alt="Explore Icon" title="Explore Website"></img></a>
                            </div>
                            <div className="header-menu pull-right">
                                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                                <NavLink to="/destination" activeClassName="active" exact={true}>Destination</NavLink>
                                <a href="#discount">Discount</a>
                                <a href="#about">About</a>
                                <a href="#blog">Blog</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                    <section className="section-one">
                        <h1>Start Your Greatest
                        Adventure with us!</h1>
                    </section>
                </header>

            </div>
        )
    }
}

export default Header