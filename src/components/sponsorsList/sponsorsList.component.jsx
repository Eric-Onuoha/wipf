import "./sponsorsList.styles.scss";

import Logo1 from "../../assets/images/actionaid.png";
import Logo2 from "../../assets/images/canada.png";
let sponsors = [
  Logo1,
  Logo2,
  Logo1,
  Logo2,
  Logo1,
  Logo2,
  Logo1,
  Logo2,
  Logo1,
  Logo2
];

const SponsorsList = () => {
  return (
    <div id="sponsorsListComponent">
      {sponsors.map((sponsor) => (
        <div class="sponsorsList">
          <img src={sponsor} alt="Sponsors Logo" />
        </div>
      ))}
    </div>
  );
};

export default SponsorsList;
