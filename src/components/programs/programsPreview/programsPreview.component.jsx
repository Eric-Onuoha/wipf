import "./programsPreview.styles.scss";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../../utils/handleNavigation.component";
import PlainButton from "../../plainButton/plainButton.component";

const ProgramsPreview = ({programs, number = programs.length}) =>{
    const navigate = useNavigate();
    
    return (
        <div id="latestProgramsPreviewComponent">
          {programs.slice(0,number).map((program) => (
            <div className="latestProgram" key={Math.random(0, 10)}>
              <div className="cardTop" style={{backgroundImage: `url(${program.images[0]})`}}>
                <div className="date">
                  <h2 className="day">{program.day}</h2>
                  <h2 className="month">{program.month}</h2>
                  <h2 className="year">{program.year}</h2>                
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