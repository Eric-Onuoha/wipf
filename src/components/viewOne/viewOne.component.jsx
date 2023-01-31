import React from "react";
import { useSelector } from "react-redux";

const ViewOne = (props) => {  
    const areaTitles = Object.keys(props.content);
    const areaContent = Object.values(props.content);
    return(
        <div>
            <br />
            <br />
            <br />
            <br />
            {areaTitles.map((areaTitle, i) => (
                <div key={areaTitle}>
                    <img src="https://drive.google.com/uc?id=1OZffbUZMSvWzVsnwgFfZ712m5iw_EZMM" alt="" srcset="" />
                    <h1>{areaTitle}</h1>
                    <p>{areaContent[i]}</p>
                </div>
            ))}
        </div>
    )
}
export default ViewOne;