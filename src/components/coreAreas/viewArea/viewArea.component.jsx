import React from "react";
import { useSelector } from "react-redux";
import "./viewArea.styles.scss";
import parse from "html-react-parser";
import bannerImage from "../../../assets/images/press conference.jpg";
import mentorship from "../../../assets/images/mentorship.jpg";
import advocacy from "../../../assets/images/advocacy.jpg";

const ViewArea = () => {
    
const CoreAreasDB = useSelector((state) => state.coreAreas.coreAreas.CoreAreas) || {};


const areaTitles = Object.keys(CoreAreasDB);
const areaContent = Object.values(CoreAreasDB);
console.log(areaTitles);

const showImage = (area) =>{
    if(area === "Political Advocacy"){
        return <div>
                <img src={advocacy} alt="" /> 
                <p>Women in Politics forum present in Parliament advocatong for bills in support of women</p>
            </div>;
    } else if (area === "Mentorship & Training"){
        return <img src={mentorship} alt="" />;
    } else {
        return <img src={bannerImage} alt="" />
    }
}

    return(
        <div id="coreAreaComponent">
        {areaTitles.map((areaTitle, i) => (
          <div className="coreAreaContent" key={areaTitle}>
            {showImage(areaTitle)}
            <h1 className="h2">{areaTitle}</h1>
            <p id="coreAreaText" className="p2">
                {parse(areaContent[i])}
            </p>
          </div>
        ))}
      </div>
    )
}; export default ViewArea;