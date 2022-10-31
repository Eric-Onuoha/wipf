import "./latestProgramsPreview.styles.scss";

// import programImage from "../../assets/images/press\ conference.jpg";
import PlainButton from "../plainButton/plainButton.component";

const LatestProgramsPreview = ({programDetails}) =>{
    return (
        <div id="latestProgramsPreviewComponent">
          {programDetails.map((programDetails) => (
            <div className="latestProgram">
              <div className="cardTop">
                <div className="date"><h2 className="day">30<span className="month">January</span></h2></div>
              </div>
              <div className="cardBottom">
                <div className="latestProgramDetails">
                  <h2 className="theme">{programDetails.theme}</h2>
                  <h2 className="title">{programDetails.title}</h2>
                  <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad quam dolores in nisi!</p>
                </div>
                <div className="cardReadMore">
                  <PlainButton text = "Read" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default LatestProgramsPreview;