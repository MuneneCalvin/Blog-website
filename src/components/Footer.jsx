import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="box">
                <div className="left">
                    <div className="categories">
                        <p>Categories</p>
                    <div>
                        <p>Sports</p>
                    </div>
                    <div>
                        <p>Business</p>
                    </div>
                    <div>
                        <p>Technology</p>
                    </div>
                    </div>
                <div className="contactUs">
                    <div className="contact">
                        <p>Contact Us</p>
                        <div>Phone No. - <span>0795756638</span></div>
                        <div>Email - <span>munenecalvn@gmail.com</span></div>
                        <div>Address - <span>Nairobi, Kenya</span></div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="newsletter">
                    <p>Subscribe to Our Newsletter</p>
                    <div className="email">
                        <input type="email" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyrights">
            <p>© 2023 News. All Rights Reserved.</p>
        </div>
    </div>
    );
}

export default Footer