import "./teamImagesPreview.styles.scss";

const TeamImagesPreview = ({wipfStaff}) => {

 console.log(wipfStaff);

  return (
    <div id="teamImagesPreviewComponent">
      {wipfStaff.map((staff) => (
        <div className="profile">
          <img src={staff.image} alt="" />
          <h4>{staff.fullName}</h4>
          <p>{staff.position}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamImagesPreview;
