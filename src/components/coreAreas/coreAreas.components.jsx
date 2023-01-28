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

    useEffect(() => {
        // getSingleDocument("LandingPage", "fgdhjb").then((coreAreasDB) => console.log(coreAreasDB));
        getMultipleDocuments("LandingPage").then((coreAreasDB) => dispatch(coreAreasDB.CoreAreas));
        
    }, []);

    const coreAreas = useSelector((state) => state.coreAreas);
    console.log(coreAreas);

    return(
        <div>
            <CoreAreasPreview areas = {coreAreas}></CoreAreasPreview>
        </div>
    )
};

export default CoreAreas;