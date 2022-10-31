import "../wipfLogo/wipfLogo.styles.scss";

import Logo from "../../assets/images/wipfnewlogo.png";

const WIPFLogo = ()=>{
    return(
      <div id="wipfLogo">
        <img src={Logo} alt="" />
      </div>
    )
};

export default WIPFLogo;