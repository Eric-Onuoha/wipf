import React from "react";
import { useSelector } from "react-redux";
import TeamImagesPreview from "./teamImagesPreview/teamImagesPreview.component";

const TeamImages = () => {

    const StaffDB = useSelector((state)=> state.staff.staff) || {};
    
    const wipfStaff = [];
    for (const staff in StaffDB){
      wipfStaff.push(StaffDB[staff]);
    }

    return(
        <TeamImagesPreview wipfStaff = {wipfStaff}></TeamImagesPreview>
    )
}; export default TeamImages;