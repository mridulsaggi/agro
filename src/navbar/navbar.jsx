import React from 'react'
import i1 from "../img/product/cart_p02.jpg"
import i2 from "../img/logo/w_logo.png"
import i31 from "../img/logo/logo.png"
import i3 from "../img/product/cart_p01.jpg"
import i4 from "../img/bg/header_bg.jpg"
import { Link } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
    return (
        // <div className='nav'>
        //     <Link to="/">HOME</Link>
        //     <Link to="/">ABOUT</Link>
        //     <Link to="/">CONTACT</Link>
        // </div>
        <>
            <header>
                <div id="sticky-header" class="main-header menu-area transparent-header">
                    <div class="container-fluid container-full">
                        <div class="row">
                            <div class="col-12">
                                <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                                <div class="menu-wrap">
                                    <div class="header-bg" data-background={i4}></div>
                                    <nav class="menu-nav show">
                                        <div class="logo">
                                            <a href="index.html">
                                                <img src={i31} alt="Logo" />
                                            </a>
                                        </div>
                                        <div class="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul class="navigation">
                                                <li class="dropdown"><a href="index.html">Home</a>
                                                    <ul class="submenu">
                                                        <li> </li>


                                                    </ul>
                                                </li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="farming-strategy.html">Farming</a></li>
                                                <li class="active dropdown"><a href="#">Schemes</a>
                                                    <ul class="submenu">
                                                        <li><a href="pricing.html">Pricing Plan</a></li>
                                                        <li class="active"><a href="our-project.html">Our Project</a></li>
                                                        <li><a href="project-details.html">Project Details</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown"><a href="#">Shop</a>
                                                    <ul class="submenu">
                                                        <li><a href="index-2.html">Our Shop</a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown"><a href="#">Blog</a>
                                                    <ul class="submenu">
                                                        <li><a href="blog.html">Our Blog</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">contacts</a></li>
                                            </ul>
                                        </div>
                                        <div class="header-action d-none d-md-block">
                                            <ul>
                                                <li class="header-shop-cart"><a className="temp" href="#"><i
                                                    class="fas fa-shopping-basket"></i><span>2</span></a>
                                                    <ul class="minicart">
                                                        <li class="d-flex align-items-start">
                                                            <div class="cart-img">
                                                                <a href="#">
                                                                    <img src={i3} alt="" />
                                                                </a>
                                                            </div>
                                                            <div class="cart-content">
                                                                <h4>
                                                                    <a href="#">Potatos</a>
                                                                </h4>
                                                                <div class="cart-price">
                                                                    <span class="new">₹40</span>
                                                                    <span>
                                                                        <del>₹40</del>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="del-icon">
                                                                <a href="#">
                                                                    <i class="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="d-flex align-items-start">
                                                            <div class="cart-img">
                                                                <a href="#">
                                                                    <img src={i1} alt="" />
                                                                </a>
                                                            </div>
                                                            <div class="cart-content">
                                                                <h4>
                                                                    <a href="#"> Wheat</a>
                                                                </h4>
                                                                <div class="cart-price">
                                                                    <span class="new">₹40</span>
                                                                    <span>
                                                                        <del>₹40</del>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="del-icon">
                                                                <a href="#">
                                                                    <i class="far fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="total-price">
                                                                <span class="f-left">Total:</span>
                                                                <span class="f-right">$239.9</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="checkout-link">
                                                                <a href="#">Shopping Cart</a>
                                                                <a class="red-color" href="#">Checkout</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="header-btn"><a href="#" class="btn gradient-btn">Start Now</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
