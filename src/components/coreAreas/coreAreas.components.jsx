import React, {useEffect} from 'react';
import "./coreAreas.styles.scss";
import CoreAreasPreview from './coreAreasPreview/coreAreasPreview.component';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateCoreAreas } from '../../reduxStore/actionDispatches';

const CoreAreas = () => {
    const dispatch = useDispatch();

    const coreAreas = useSelector((state) => state.coreAreas.coreAreas);
    console.log(coreAreas);

    useEffect(() => {
        dispatch(updateCoreAreas(coreAreas));
    }, []);

    return(
        <div>
            <CoreAreasPreview areas = {coreAreas}></CoreAreasPreview>
        </div>
    )
};

export default CoreAreas;