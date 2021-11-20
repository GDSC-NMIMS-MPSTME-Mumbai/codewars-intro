import React from "react";
import './Footer.css'
import GDSCLogo from '../Assets/GDSCLogo.png'

export default function Footer() {
    return (

        <footer className="nb-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about">
                            <img src={GDSCLogo} className="img-responsive center-block GDSCLogo" alt=""/>
                            <p>Bootstrap Footer example snippets with CSS, Javascript and HTML.Code example of bootstrap-3 footer using HTML, Javascript, jQuery, and CSS.5 Beautiful and Responsive Footer Templates.Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>

                            <div class ="social-media">
                            <ul class ="list-inline">
                            <li><a href="http://www.nextbootstrap.com/" title=""><i class ="fa fa-facebook"/></a></li>
                            <li><a href="http://www.nextbootstrap.com/" title=""><i class ="fa fa-twitter"/></a></li>
                            <li><a href="http://www.nextbootstrap.com/" title=""><i class ="fa fa-google-plus"/></a></li>
                            <li><a href="http://www.nextbootstrap.com/" title=""><i class ="fa fa-linkedin"/></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
}