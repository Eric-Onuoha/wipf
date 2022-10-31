import "../contactDetails/contactDetails.styles.scss";

import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";

const ContactDetails = () => {
    return (
        <div id="contactDetailsComponent">
            <div id="contactDetails">
                <div id="phoneDetails">
                        <img src={c1} alt="" />
                    <div>
                        <h2>Phone</h2>
                        <p>+234 803 3258 542</p>
                        <p>+234 222 2222 222</p>
                    </div>
                </div>
                <hr />
                <div id="emailDetails">
                        <img src={c2} alt="" />
                    <div>
                        <h2>Email</h2>
                        <p>admin@wipfng.com</p>
                        <p>womeninpoliticsforum@gmail.com</p>
                    </div>
                </div>
                <hr />
                <div id="addressDetails">
                        <img src={c3} alt="" />
                    <div>
                        <h2>Address</h2>
                        <p>Amb. Albert I. Osakwe House, 1473 Inner Block St, Central Business Dis 900103, Abuja</p>
                        <a href="#">View on google</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;