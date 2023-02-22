import "./programsNavigationPreview.styles.scss";

const ProgramsNavigationPreview = ({ programs }) => {

  return (
    <div id="programsNavigationPreviewComponent">
      <div id="programSearch">
        
        <input
          id="searchTitle"
          type="text"
          aria-label="search"
          placeholder="Search Programs by Title"
        />

      <div id="searchCriteria">
      <select name="theme" id="searchTheme">
        <option disabled selected value="search">Search by Theme</option>
        <option value="Political Advocacy">Political Advocacy</option>
        <option value="Mentorship & Training">Mentorship & Training</option>
        <option value="Socio-Political Activism">Socio-Political Activism</option>
      </select>

      <select name="year" id="searchYear">
      <option disabled selected value="search">Search by Year</option>
        {programs.map((program)=>(
          <option value={program.year}>{program.year}</option>
        ))}
      </select>
      </div>

      </div>

    </div>
  );
};

export default ProgramsNavigationPreview;
