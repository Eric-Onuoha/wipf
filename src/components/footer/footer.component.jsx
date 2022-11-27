import "../footer/footer.styles.scss";
import {Timeline} from 'react-twitter-widgets';
import { InstagramEmbed } from 'react-social-media-embed';

// import WIPFLogo from "../wipfLogo/wipfLogo.component";

const Footer = () =>{
    return(
        <div id="footerComponent">
            <div id="footerContentArea">
                <div id="footerOutro">
                    <div>
                    {/* <WIPFLogo /> */}
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
                    <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} captioned />
                </div>
                <div id="footerTwitter">
                    <a className="twitter-timeline" href="https://twitter.com/wipfng?ref_src=twsrc%5Etfw">Tweets by wipfng</a> 
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
                    <Timeline/>                
                </div>
            </div>            
        </div>
    )
}

export default Footer;