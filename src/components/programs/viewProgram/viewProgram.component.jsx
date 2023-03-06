import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import "./viewProgram.styles.scss";

const ViewProgram = () => {
    const programsDB = useSelector((state) => state.programs.programs);

    const pathName = window.location.pathname;
    const paths = pathName.split("/");
    const path = paths[2];

    const programs = [];
    for (const program in programsDB){
      programs.push(programsDB[program]);
    }

    const programToView = programs.filter((prog) => {
      return prog.id == path;
    })

      return(
        <div id="viewProgramComponent">
          {programToView.map((program)=> (
                  <div id="viewProgramContent">
                      <div id="header">
                        <div id="programImages">
                            <span className="next" id="left"></span>
                            <img id="headerImage" src={program.image} alt="" />
                            <img id="headerImage" src={program.image} alt="" />
                            <img id="headerImage" src={program.image} alt="" />
                            <span className="next" id="right"></span>
                        </div>
                          <div>
                            <h4 id="programTitle">{program.ProgramTitle}</h4>
                            <p id="programDate">{program.ProgramDate}</p>
                          </div>
                      </div>
                      <div id="body">
                          <p className="p1">{parse(program.ProgramReport)}</p>
                      </div>
                  </div>
          ))}
      </div>
    )
}; export default ViewProgram;