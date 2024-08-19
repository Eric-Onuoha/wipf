import "./programsNavigationPreview.styles.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProgramsNavigationPreview = ({ programsYear }) => {
  const navigate = useNavigate();

  const [titleQuery, setTitleQuery] = useState("");

  const handleYear = (e) => {
    const year = e.target.value;
    navigate("/programs?year_" + year);
  }

  const handleTheme = (e) => {
    const theme = e.target.value;
    navigate("/programs?theme_" + theme);
  }

  const handleTitleChange = (e) => {
    setTitleQuery(e.target.value);  
  }

  const handleTitleSubmit = (e) => {
    e.preventDefault();
    navigate("/programs?title_" + titleQuery);
  }


  return (
    <div id="programsNavigationPreviewComponent">
      <div id="programSearch">
        

        <form onSubmit={handleTitleSubmit}>
          <input
            name="title"
            onChange={handleTitleChange}
            value={titleQuery}
            id="searchTitle"
            type="text"
            aria-label="search"
            placeholder="Search by Title"
          />
        </form>

        <div id="searchCriteria">
        <select onChange={handleTheme} name="theme" id="searchTheme">
          <option disabled selected value="search">Search by Theme</option>
          <option value="Political Advocacy">Political Advocacy</option>
          <option value="Mentorship & Training">Mentorship & Training</option>
          <option value="Socio-Political Activism">Socio-Political Activism</option>
          <option value="Gender Based Violence">Gender Based Violence</option>
        </select>

        <select onChange={handleYear} name="year" id="searchYear">
        <option disabled selected value="search">Search by Year</option>
          {programsYear.map((programYear)=>(
            <option value={programYear.year}>{programYear.year}</option>
          ))}
        </select>
        </div>

      </div>

    </div>
  );
};

export default ProgramsNavigationPreview;
