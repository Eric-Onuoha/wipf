import "./teamImagesPreview.styles.scss";

import StaffImage from "../../../assets/images/press conference.jpg";



// [
//   { name: "Name Surname", position: "Some Position", image: { StaffImage } },
//   { name: "Name Surname", position: "Some Position", image: { StaffImage } },
//   { name: "Name Surname", position: "Some Position", image: { StaffImage } }
// ];

const TeamImagesPreview = ({wipfStaff}) => {

 console.log(wipfStaff);

  return (
    <div id="teamImagesPreviewComponent">
      {wipfStaff.map((staff) => (
        <div className="profile">
          <img src={StaffImage} alt="" />
          <h4>{staff.fullName}</h4>
          <p>{staff.position}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamImagesPreview;
