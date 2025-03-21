import "./contactDetails.styles.scss";

import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";

const ContactDetails = () => {
    return (
        <div id="contactDetailsComponent">
            <div id="contactDetails">
                <div id="phoneDetails">
                    <div>
                        <img src={c1} alt="" />
                    </div>
                    <div>
                        <h2 className="h2">Phone</h2>
                        <a href="tel:+234 903 4034 985" className="p2">+234 903 4034 985</a>
                    </div>
                </div>
                <hr />
                <div id="emailDetails">
                    <div>
                        <img src={c2} alt="" />
                    </div>
                    <div id="emailDetailsContent">
                        <h2>Email</h2>
                        <a href="mailto:womeninpoliticsforum@gmail.com" className="p2">womeninpoliticsforum@gmail.com</a>
                    </div>
                </div>
                <hr />
                <div id="addressDetails">
                    <div>
                        <img src={c3} alt="" />
                    </div>
                    <div>
                        <h2>Address</h2>
                        <p className="p2">10 Zambezi Crescent, Maitama, Abuja 900103, Federal Capital Territory</p>
                        <a className="p2" href="https://goo.gl/maps/5QnwHgaYnLqN2X6p6" target="_blank">View on google</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;