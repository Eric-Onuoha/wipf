import React from "react";

const ViewOne = (props) => {  
    const titles = Object.keys(props.content);
    const content = Object.values(props.content);
    return(
        <div>
            <br />
            <br />
            <br />
            <br />
            {titles.map((title, i) => (
                <div key={title}>
                    <h1>{title}</h1>
                    <p>{content[i]}</p>
                </div>
            ))}
        </div>
    )
}
export default ViewOne;