import React from "react";
import { useSelector } from "react-redux";

const ViewOne = () => {
    const content = useSelector((state) => state.coreAreas.coreAreas.CoreAreas) || {};
    return(
        <div>
            <h1>Read more about a page</h1>
        </div>
    )
}
export default ViewOne;