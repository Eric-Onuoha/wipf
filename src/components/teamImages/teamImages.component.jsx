import React from "react";
import { useSelector } from "react-redux";
import TeamImagesPreview from "./teamImagesPreview/teamImagesPreview.component";

const TeamImages = () => {

    const StaffDB = useSelector((state)=> state.staff.staff) || {};
    console.log(StaffDB);
    
    const wipfStaff = [];
    for (const staff in StaffDB){
      wipfStaff.push(StaffDB[staff]);
    }
    console.log(wipfStaff);

    return(
        <TeamImagesPreview wipfStaff = {wipfStaff}></TeamImagesPreview>
    )
}; export default TeamImages;