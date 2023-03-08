import React from "react";
import { useSelector } from "react-redux";
import "./viewArea.styles.scss";
import parse from "html-react-parser";

const ViewArea = () => {
    
const CoreAreasDB = useSelector((state) => state.coreAreas.coreAreas.CoreAreas) || {};


const areaTitles = Object.keys(CoreAreasDB);
const areaContent = Object.values(CoreAreasDB);

    return(
        <div id="coreAreaComponent">
        {areaTitles.map((areaTitle, i) => (
          <div className="coreArea" key={areaTitle}>
            <div id="coreAreaImage">
                <img src="" alt="" />
            </div>
            <div>
                <div id="coreAreaHeading">
                    <h1 className="h2">{areaTitle}</h1>
                </div>
                <div>
                    <p id="coreAreasText" className="p2">
                        {parse(areaContent[i])}
                    </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    )
}; export default ViewArea;