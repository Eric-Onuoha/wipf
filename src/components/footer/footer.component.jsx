import "../footer/footer.styles.scss";
import {Timeline} from 'react-twitter-widgets';
import { InstagramEmbed } from 'react-social-media-embed';
import MiniSectionIntro from "../miniSectionIntro/miniSectionIntro.component";

import WIPFLogo from "../wipfLogo/wipfLogo.component";
import TwitterLogo from "../../assets/images/twitterLogo.png"
import InstagramLogo from "../../assets/images/instagramLogo.png"

const Footer = () =>{
    return(
        <div id="footerComponent">
            {/* <div id="footerContentArea">
                <div id="footerOutro">
                    <div>
                    <WIPFLogo />
                    <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum nihil maxime sit quas non dicta numquam minima fuga tempora quae dolores dolor, pariatur ad porro perspiciatis illum aperiam reiciendis.</p>
                    </div>
                </div>
                <div id="footerSocials">
                    <div id="twitter">
                        <a className="twitter-timeline" href="https://twitter.com/wipfng?ref_src=twsrc%5Etfw">Loading Tweets from @wipfng ...</a> 
                        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
                        <Timeline/>  
                    </div>
                    <div id="instagram">
                        <p className="p3">Follow on Instagram</p>
                        <InstagramEmbed url="https://www.instagram.com/p/ClOEgO4Ko-e/" height={54} />
                    </div>
                </div>
                <div id="footerQuickLinks">
                    <MiniSectionIntro sectionTitle="Quick Links"></MiniSectionIntro>
                    <div id="link">
                        <div className="links">
                            <a href="#"><p className="p2">Join Us</p></a>
                            <a href="#"><p className="p2">Support</p></a>
                            <a href="#"><p className="p2">Programs</p></a>
                            <a href="#"><p className="p2">Contact Us</p></a>
                            <a href="#"><p className="p2">Contact Us</p></a>
                        </div>
                        <div className="links">
                            <a href="#"><p className="p2">Join Us</p></a>
                            <a href="#"><p className="p2">Support</p></a>
                            <a href="#"><p className="p2">Programs</p></a>
                            <a href="#"><p className="p2">Contact Us</p></a>
                            <a href="#"><p className="p2">Contact Us</p></a>
                        </div>
                    </div>
                </div>
                <div id="footerSocialMobile">
                    <a href="https://twitter.com/wipfng/"><img src={TwitterLogo} alt="Go to WIPF Twitter Profile"/></a> 
                    <a href="https://www.instagram.com/womeninpoliticsforum/"><img src={InstagramLogo} alt="Go to WIPF Instagram Profile"/></a> 
                </div>
            </div>
            <p id="developer" className="p1">Developed By <span className="link">Kapagru Technology Solutions</span></p>             */}
        </div>
    )
}

export default Footer;