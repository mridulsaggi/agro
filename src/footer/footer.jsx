import React from 'react'
import "./footer.css"
const footer = () => {
    return (
        <>
             <footer>
            <div class="footer-top footer-bg fix" data-background="img/bg/footer_bg.jpg">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-widget mb-50">
                                <div class="footer-logo mb-35">
                                    <a href="index.html"><img src="img/logo/w_logo.png" alt=""/></a>
                                </div>
                                <div class="footer-text">
                                    <p>Agrifram Farming of relse etras sheets connig passag.</p>
                                    <div class="footer-contact">
                                        <ul>
                                            <li><i class="fas fa-map-marker-alt"></i> <span>Address : </span>PO Box W75 Street
                                                lan West new queens</li>
                                            <li><i class="fas fa-headphones"></i> <span>Phone : </span>+24 1245 654 235</li>
                                            <li><i class="fas fa-envelope-open"></i><span>Email : </span><a href="https://themebeyond.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6f060109002f0a170a021f030a410c0002">[email&#160;protected]</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="footer-widget mb-50">
                                <div class="fw-title mb-35">
                                    <h5>Products</h5>
                                </div>
                                <div class="fw-link">
                                    <ul>
                                        <li><a href="#">Hydroponic (26)</a></li>
                                        <li><a href="#">Agriculture (11)</a></li>
                                        <li><a href="#">Foods (9)</a></li>
                                        <li><a href="#">Milking (3)</a></li>
                                        <li><a href="#">Nutrition (3)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="footer-widget mb-50">
                                <div class="fw-title mb-35">
                                    <h5>Need Help?</h5>
                                </div>
                                <div class="footer-blog-post">
                                    <ul>
                                        <li>
                                            <div class="f-blog-post-thumb">
                                                <a href="#"><img src="img/blog/f_blog_thumb01.jpg" alt=""/></a>
                                            </div>
                                            <div class="f-blog-post-content">
                                                <h5><a href="#">Agriculture is the science and art of cultivating</a></h5>
                                                <span>Tonoy Pueyo</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="f-blog-post-thumb">
                                                <a href="#"><img src="img/blog/f_blog_thumb01.jpg" alt=""/></a>
                                            </div>
                                            <div class="f-blog-post-content">
                                                <h5><a href="#">Whereby farming doated species create</a></h5>
                                                <span>Mark Wiens</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-widget mb-50">
                                <div class="fw-title mb-35">
                                    <h5>Follow us</h5>
                                </div>
                                <div class="footer-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer-widget mb-50">
                                <div class="fw-title mb-30">
                                    <h5>newsletter sign up</h5>
                                </div>
                                <div class="footer-newsletter">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your email"/>
                                        <button><i class="fas fa-rocket"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom-shape fb-shape1 running"><img src="img/images/footer_vector01.png" alt=""/></div>
                <div class="footer-bottom-shape fb-shape2"><img src="img/images/footer_vector02.png" alt=""/></div>
                <div class="footer-bottom-shape fb-shape3"><img src="img/images/footer_vector03.png" class="rotateme" alt=""/></div>
            </div>
            <div class="copyright-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="copyright-text">
                                <p>Copyright © 2020 <a href="#">Agrifram</a> All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-none d-md-block">
                            <div class="payment-method-list">
                                <ul>
                                    <li><a href="#"><img src="img/icon/visa_2.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/icon/ae_02.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/icon/discover.png" alt=""/></a></li>
                                    <li><a href="#"><img src="img/icon/stripe.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default footer
