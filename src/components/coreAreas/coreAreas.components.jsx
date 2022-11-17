import React from 'react';
import "./coreAreas.styles.scss";
import CoreAreasPreview from './coreAreasPreview/coreAreasPreview.component';

const areas = [{name:"Mentorship & Training", colour: "#FC6539"}, {name:"Political Advocacy", colour: "#001D23"}, {name: "Socio-Political Activism", colour: "#FEA444"}];

const CoreAreas = () => {
    return(
        <div>
            <CoreAreasPreview areas = {areas}></CoreAreasPreview>
        </div>
    )
};

export default CoreAreas;