import "./programsPreview.styles.scss";

// import programImage from "../../assets/images/press\ conference.jpg";
import PlainButton from "../../plainButton/plainButton.component";

const ProgramsPreview = ({programDetails}) =>{
    return (
        <div id="latestProgramsPreviewComponent">
          {programDetails.map((programDetails) => (
            <div className="latestProgram" key={Math.random(0, 10)}>
              <div className="cardTop">
                <div className="date">
                  <h2 className="day">30</h2>
                  <h2 className="month">January</h2>
                  <h2 className="year">2022</h2>                
                </div>
              </div>
              <div className="cardBottom">
                <div className="latestProgramDetails">
                  <h2 className="theme">{programDetails.theme}</h2>
                  <h2 className="title">{programDetails.title}</h2>
                  <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit6. Optio, ad quam dolores in nisi!</p>
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

export default ProgramsPreview;