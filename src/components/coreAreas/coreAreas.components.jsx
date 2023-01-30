import React from 'react';
import "./coreAreas.styles.scss";
import CoreAreasPreview from './coreAreasPreview/coreAreasPreview.component';
import { useSelector } from "react-redux";

const CoreAreas = () => {
    const coreAreas = useSelector((state) => state.coreAreas.coreAreas.CoreAreas) || {};

    return(
        <div>
            <CoreAreasPreview areas = {coreAreas}></CoreAreasPreview>
        </div>
    )
};

export default CoreAreas;