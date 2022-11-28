import "./sponsorsList.styles.scss";

import ActionAidLogo from "../../assets/images/actionaid.jpg";
import CanadaLogo from "../../assets/images/canada.png";
import MacArthurLogo from "../../assets/images/macarthur.png";
import UsAIDLogo from "../../assets/images/usaid.png";
import UkAIDLogo from "../../assets/images/ukaid.jpg";
import WrappaLogo from "../../assets/images/wrappa.png";
import UNWomenLogo from "../../assets/images/unwomen.png";
import NDILogo from "../../assets/images/ndi.jpg";


let sponsors = [
  {name: "NDI", logo: ActionAidLogo, link: "hhtps://www.ndi.org"},
  {name: "MacArthur", logo: MacArthurLogo, link: "#"},
  {name: "canada", logo: CanadaLogo, link:"#"},
  {name: "USAID", logo: UsAIDLogo, link:"#"},
  {name: "UkAID", logo: UkAIDLogo, link: "#"},
  {name: "Wrappa", logo: WrappaLogo, link: "#"},
  {name: "UN Women", logo: UNWomenLogo, link: "#"},
  {name: "NDI", logo: NDILogo, link: "#"}
]

const SponsorsList = () => {
  return (
    <div id="sponsorsListComponent">
      {sponsors.map((sponsor) => (
        <div className="sponsorsList" key={sponsor.name}>
          <img src={sponsor.logo} alt="Sponsors Logo" />
        </div>
      ))}
    </div>
  );
};

export default SponsorsList;
