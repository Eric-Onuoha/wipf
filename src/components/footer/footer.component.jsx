import "../footer/footer.styles.scss";

import WIPFLogo from "../wipfLogo/wipfLogo.component";
import igImage from "../../assets/images/press conference.jpg";

const Footer = () =>{
    return(
        <div id="footerComponent">
            <div id="footerContentArea">
                <div id="footerOutro">
                    <div>
                    <WIPFLogo />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum nihil maxime sit quas non dicta numquam minima fuga tempora quae dolores dolor, pariatur ad porro perspiciatis illum aperiam reiciendis.</p>
                    <div className="quickLinks">
                        <a href="#">Join Us</a>
                        <a href="#">Support</a>
                        <a href="#">Programs</a>
                        <a href="#">Contact Us</a>
                    </div>
                    </div>
                </div>
                <div id="footerInstagram">
                    <h2>Instagram</h2>
                    <div className="igImages">
                        <div className="igImage">
                            <img src={igImage} alt="" />
                        </div>
                        <div className="igImage">
                            <img src={igImage} alt="" />
                        </div>
                        <div className="igImage">
                            <img src={igImage} alt="" />
                        </div>
                    </div>
                    <div className="igImages">
                    <div className="igImage">
                            <img src={igImage} alt="" />
                        </div>
                        <div className="igImage">
                            <img src={igImage} alt="" />
                        </div>
                        <div className="igImage">
                            <img src={igImage} alt="" />
                        </div>
                    </div>
                </div>
                <div id="footerTwitter">
                    <h1>Twitter</h1>
                </div>
            </div>            
        </div>
    )
}

export default Footer;