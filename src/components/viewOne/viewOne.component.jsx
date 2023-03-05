import React from "react";
import "./viewOne.styles.scss";

const ViewOne = ({content, path}) => {  

    console.log(content);

    const contentToView = content.filter((cont) => {
        return cont.id == path;
    })

    return(
        <div id="viewOneComponent">
            {contentToView.map((Content)=> (
                <div id="viewOneWrap">
                    <div id="viewOneNav">
                        programs -- {Content.ProgramTitle}
                    </div>
                    <div id="viewOneContent">
                        <div id="header">
                            <img src={Content.image} alt="" />
                            <h2>{Content.ProgramTitle}</h2>
                            <p>{Content.ProgramDate}</p>
                        </div>
                        <div>
                            <p>{Content.ProgramReport}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ViewOne;