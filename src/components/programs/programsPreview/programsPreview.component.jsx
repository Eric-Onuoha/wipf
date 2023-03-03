import "./programsPreview.styles.scss";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../../utils/handleNavigation.component";
import parse from "html-react-parser";

// import programImage from "../../assets/images/press\ conference.jpg";
import PlainButton from "../../plainButton/plainButton.component";

const ProgramsPreview = ({programs, number = programs.length}) =>{
    const navigate = useNavigate();
    console.log(number);
    return (
        <div id="latestProgramsPreviewComponent">
          {programs.slice(0,number).map((program) => (
            <div className="latestProgram" key={Math.random(0, 10)}>
              <div className="cardTop" style={{backgroundImage: `url(${program.image})`}}>
                <div className="date">
                  <h2 className="day">30</h2>
                  <h2 className="month">January</h2>
                  <h2 className="year">2022</h2>                
                </div>
              </div>
              <div className="cardBottom">
                <div className="latestProgramDetails">
                  <h2 className="theme">{program.ProgramTheme}</h2>
                  <h2 className="title">{program.ProgramTitle}</h2>
                </div>
                <div className="cardReadMore" onClick={() => navigate(handleNavigation("/programs/" + program.id))}>
                  <PlainButton text = "Read" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default ProgramsPreview;