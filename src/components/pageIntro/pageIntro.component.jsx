import "./pageIntro.styles.scss";

import PageBanner from "../../assets/images/contactUsBanner.jpg";

const PageIntro = (props) => {
  return (
    <div id="pageIntroComponent">
      <img src={PageBanner} alt="" srcset="" />
      <h2>{props.pageTitle}</h2>
    </div>
  );
};

export default PageIntro;
