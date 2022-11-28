import "../contactDetails/contactDetails.styles.scss";

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
                        <p className="p2">+234 803 3258 542</p>
                        <p className="p2">+234 222 2222 222</p>
                    </div>
                </div>
                <hr />
                <div id="emailDetails">
                    <div>
                        <img src={c2} alt="" />
                    </div>
                    <div id="emailDetailsContent">
                        <h2>Email</h2>
                        <p className="p2">admin@wipfng</p>
                        <p className="p2">womeninpoliticsforum@gmail</p>
                        {/* <h2>Email</h2>
                        <p className="p2">admin@wipfng.com</p>
                        <p className="p2">womeninpoliticsforum@gmail.com</p> */}
                    </div>
                </div>
                <hr />
                <div id="addressDetails">
                    <div>
                        <img src={c3} alt="" />
                    </div>
                    <div>
                        <h2>Address</h2>
                        <p className="p2">Amb. Albert I. Osakwe House, 1473 Inner Block St, Central Business Dis 900103, Abuja</p>
                        <a className="p2" href="#">View on google</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;