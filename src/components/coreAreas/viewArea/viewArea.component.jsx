import React from "react";
import { useSelector } from "react-redux";
import "./viewArea.styles.scss";
import parse from "html-react-parser";
import PageIntro from "../../pageIntro/pageIntro.component";
import bannerImage from "../../../assets/images/press conference.jpg";
import mentorship from "../../../assets/images/mentorship.jpg";
import advocacy from "../../../assets/images/advocacy.jpg";

const ViewArea = () => {
    
const CoreAreasDB = useSelector((state) => state.coreAreas.coreAreas.CoreAreas) || {};


const areaTitles = Object.keys(CoreAreasDB);
const areaContent = Object.values(CoreAreasDB);

const showImage = (area) =>{
    if(area === "Political Advocacy"){
        return <div className="areaImageDiv">
                <img src={advocacy} alt="" /> 
                <p className="areaCaption">Women in Politics forum in Parliament advocatong for bills in support of women</p>
            </div>;
    } else if (area === "Mentorship & Training"){
        return <div className="areaImageDiv">
        <img src={mentorship} alt="" /> 
        <p className="areaCaption">Women in Politics forum present in Parliament advocatong for bills in support of women</p>
    </div>;
    } else {
        return <div className="areaImageDiv">
        <img src={bannerImage} alt="" /> 
        <p className="areaCaption">Women in Politics forum present in Parliament advocatong for bills in support of women</p>
    </div>;
    }
}

    return(
        <div id="coreAreaComponent">
            <PageIntro pageTitle = "Core Areas"></PageIntro>
                {areaTitles.map((areaTitle, i) => (
                <div className="coreAreaContent" key={areaTitle}>
                    {showImage(areaTitle)}
                    <div>
                    <h1 className="h2">{areaTitle}</h1>
                    <p id="coreAreaText" className="p2">
                        {parse(areaContent[i])}
                    </p>
                    </div>
                </div>
            ))}
        </div>
    )
}; export default ViewArea;