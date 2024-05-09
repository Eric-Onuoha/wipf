import React, {useState} from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import { removeDocument } from "../../../firestore/postToFirestore.utils";

import "./viewProgram.styles.scss";

const ViewProgram = () => {
    const programsDB = useSelector((state) => state.programs.programs);
    const currentUser = useSelector((state) => state.currentUser.currentUser) || "";

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

    const handleDeletion = (e) =>{
      e.preventDefault();

      try{           
        removeDocument("Programs", path);
      } catch(err){
        console.log(err);
      }  
    }


    const [a, setA] = useState(0);
    const [b, setB] = useState(1);
    const [c, setC] = useState(2);

    const nextImage = () => {
      if(a === 0){
        const imgLength = programToView[0].images.length - 1;
        const prevC = c;
        setC(b);
        setB(a);
        setA(imgLength);
      } else {
        setC(b);
        setB(a);
        setA(a-1);
      }
      console.log(a, b, c);
    }

    const prevImage = () => {
      const imgLength = programToView[0].images.length - 1;
      if(c === imgLength){
        const prevA = a;
        setA(b);
        setB(c);
        setC(prevA);
      } else {
        setA(b);
        setB(c);
        setC(c+1);
      }
      console.log(a, b, c);
    }

      return(
        <div id="viewProgramComponent">
          {programToView.map((program)=>  (
                  <div id="viewProgramContent">
                      <div id="header">
                      <div id="programImages">
                              <span onClick={prevImage} className="next" id="left"></span>
                              <img id="headerImage" src={program.images[a]} alt="" key="a"/>
                              <img id="headerImage" src={program.images[b]} alt="" key="b"/>
                              <img id="headerImage" src={program.images[c]} alt="" key="c"/>
                              <span onClick={nextImage} className="next" id="right"></span>
                            </div>
                          <div>
                            <h4 id="programTitle">{program.ProgramTitle}</h4>
                            <p id="programDate">{program.day} {program.month}, {program.year}</p>
                          </div>
                      </div>
                      <div id="body">
                          <p className="p1">{parse(program.ProgramReport)}</p>
                      </div>
                  </div>
          ))}
          {currentUser ? (
          <div id="deleteFromDB">
            <form onSubmit={handleDeletion}>
              <button>Delete</button>
            </form>
          </div>
          ): (
            <p></p>
          )}

      </div>
    )
}; export default ViewProgram;