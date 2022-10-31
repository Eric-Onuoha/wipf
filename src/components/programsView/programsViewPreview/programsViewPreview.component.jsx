import "./programsViewPreview.styles.scss";

import PlainButton from "../../plainButton/plainButton.component";

const ProgramsViewPreview = () => {
  return (
    <div id="programsViewPreviewComponent">
      <div className="latestProgram">
        <div className="cardTop">
          <div className="date">
            <h2 className="day">
              30<span className="month">January</span>
            </h2>
          </div>
        </div>
        <div className="cardBottom">
          <div className="latestProgramDetails">
            <h2 className="theme">Theme</h2>
            <h2 className="title">Title</h2>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad
              quam dolores in nisi!
            </p>
          </div>
          <div className="cardReadMore">
            <PlainButton text="Read" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsViewPreview;
