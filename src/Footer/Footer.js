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
                            <p>The data you provide us shall be used to facilitate your participation in our event as well as stored securely for further internal use. We do not indulge in the trading and barter of data. If you know any officer or executive of the GDSC who may be performing such tasks, please reach out to our Grievance officer to register a complaint.</p> 
                            <p>Google Developer Student Club, NMIMS MPSTME Mumbai is a registered chapter of Google Developer Student Clubs, a program initiated by Google LLC and Google Developers.</p>

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