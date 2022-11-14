import React from "react"

const ProgramsUpload = () => {
    return (
        <div id="programsUploadComponent">
            <form action="#">
                <label htmlFor="title">Program Title</label>
                <input name="title" type="text" />
                <label htmlFor="date">Date Start</label>
                <input name="date" type="text" />
                <label htmlFor="duration">Duration</label>
                <input name="duration" type="text" />
                <label htmlFor="report">Program Report</label>
                <textarea name="report" id="" cols="30" rows="10"></textarea>                
            </form>
        </div>
    )
}

export default ProgramsUpload;