import React, {useEffect} from 'react';
import "./coreAreas.styles.scss";
import CoreAreasPreview from './coreAreasPreview/coreAreasPreview.component';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateCoreAreas } from '../../reduxStore/actionDispatches';
import { getSingleDocument } from '../../firestore/getFromFirestore.utils';
import { getMultipleDocuments } from '../../firestore/getFromFirestore.utils';

const CoreAreas = () => {
    const dispatch = useDispatch();

    
    const coreAreas = useSelector((state) => state.coreAreas.coreAreas.CoreAreas) || {};

    useEffect(() => {
        // getSingleDocument("LandingPage", "CoreAreas").then((coreAreasDB) => dispatch(updateCoreAreas(coreAreasDB)));
        getMultipleDocuments("LandingPage").then((coreAreasDB) => dispatch(updateCoreAreas(coreAreasDB)));
        
    }, []);

    return(
        <div>
            <CoreAreasPreview areas = {coreAreas}></CoreAreasPreview>
        </div>
    )
};

export default CoreAreas;