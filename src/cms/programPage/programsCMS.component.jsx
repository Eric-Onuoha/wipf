import React, { useState } from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { useDispatch } from "react-redux";
import { uploadDocWithImages } from '../../firestore/uploadImage.utils';
import "./programCMS.styles.scss";


const ProgramsCMS = () => {
  const dispatch = useDispatch();
  const [html, setHtml] = useState(" ");
  const [formFields, setFormFields] = useState(" ");
  const {title, date, theme, image} = formFields;
  const [imageUpload, setImageUpload] = useState(null);
 
  
  const handleReportChange = (e) => {
    const {name, value} = e.target;
    setHtml(value);
    setFormFields({...formFields, [name]:value});
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]:value});
  }

  const handleImageChange = (e) => {
    let imagelist = [];
    if(e.target.files !== null) {
      for(let i = 0; i < e.target.files.length; i++){
        imagelist.push(e.target.files[i]);
      }
      setImageUpload(imagelist);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formFields[0] === " "){
      delete formFields[0];
    }

    try{
      // uploadDocWithImage(imageUpload, "Programs", undefined, formFields);
         
      uploadDocWithImages(imageUpload, "Programs", undefined, formFields);
    } catch(err){
      console.log(err);
    }  

  }

  return (
    <div id='newProgramComponent'>
        <form onSubmit={handleSubmit}>
          <h2>Add New Program</h2>

          <label htmlFor="ProgramTitle">Title of Program</label>
          <textarea id='title' required onChange={handleChange} name='ProgramTitle' value={title} type="text" />

          <label htmlFor="ProgramDate">Date of Program</label>
          <input required onChange={handleChange} name='ProgramDate' value={date} type="date" />

          <label htmlFor="ProgramTheme">Program Theme</label>
          <select required onChange={handleChange} name='ProgramTheme' id="searchTheme">
            <option disabled selected value="search">Search by Theme</option>
            <option value="Political Advocacy">Political Advocacy</option>
            <option value="Mentorship & Training">Mentorship & Training</option>
            <option value="Socio-Political Activism">Socio-Political Activism</option>
            <option value="Gender Based Violence">Gender Based Violence</option>
            </select>

          <label htmlFor="ProgramImage">Upload Program Image</label>
          <input required onChange={handleImageChange} type="file" name="image" multiple="multiple"/>

          <label htmlFor="ProgramReport">Program Report</label>
          <DefaultEditor required name='ProgramReport' value={html} onChange={handleReportChange} />

          <button type="submit">Add Report</button>
        </form>

        <div>
          <h3>Guidelines</h3>
          <p>
            <ol>
              <li>All form fields are compulsory</li>
              <li>Select program theme that more closely relates to the program</li>
              <li>All programs must have a minimum of three images</li>
              <li>The image file names MUST NOT include brackets () or other special symbols</li>
              <li>The second image will be the program banner image</li>
              <li>Program report must not include any external formatting. Please be careful when copying and pasting</li>
            </ol>
          </p>
        </div>
    </div>
  );
}; export default ProgramsCMS;