import "./teamImagesPreview.styles.scss";

import StaffImage from "../../../assets/images/press conference.jpg";

const staffDir = [
  { name: "Name Surname", position: "Some Position", image: { StaffImage } },
  { name: "Name Surname", position: "Some Position", image: { StaffImage } },
  { name: "Name Surname", position: "Some Position", image: { StaffImage } }
];

const TeamImagesPreview = () => {
  return (
    <div id="teamImagesPreviewComponent">
      {staffDir.map((staff) => (
        <div className="profile">
          <img src={StaffImage} alt="" />
          <h4>{staff.name}</h4>
          <p>{staff.position}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamImagesPreview;
