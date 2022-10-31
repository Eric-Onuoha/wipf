import "./programsNavigationPreview.styles.scss";

const ProgramsNavigationPreview = ({ programs }) => {
  return (
    <div id="programsNavigationPreviewComponent">
      <div id="programSearch">
        {/* <label htmlFor="search">Enter keyword to search:</label> */}
        <input
          id="search"
          type="text"
          aria-label="search"
          placeholder="Search For Programs"
        />
      </div>

      <div id="yearGroups">
        {programs.map((program)=>(
            <p>{program.year}</p>
        ))}
      </div>
    </div>
  );
};

export default ProgramsNavigationPreview;
