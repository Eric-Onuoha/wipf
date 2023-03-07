import React, { useState } from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { useDispatch } from "react-redux";
import { uploadDocWithImage } from '../../firestore/uploadImage.utils';
import { uploadDocWithImages } from '../../firestore/uploadImage.utils';


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
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="ProgramTitle">Title of Program</label>
          <br />
          <input onChange={handleChange} name='ProgramTitle' value={title} type="text" />
          <br />
          <label htmlFor="ProgramDate">Date of Program</label>
          <br />
          <input onChange={handleChange} name='ProgramDate' value={date} type="date" />
          <br />
          <label htmlFor="ProgramTheme">Program Theme</label>
          <br />
          <select onChange={handleChange} name='ProgramTheme' id="searchTheme">
            <option disabled selected value="search">Search by Theme</option>
            <option value="Political Advocacy">Political Advocacy</option>
            <option value="Mentorship & Training">Mentorship & Training</option>
            <option value="Socio-Political Activism">Socio-Political Activism</option>
          </select>
          <br />
          <label htmlFor="ProgramImage">Upload Program Image</label>
          <br />
          <input required onChange={handleImageChange} type="file" name="image" multiple="multiple"/>
          <br />
          <label htmlFor="ProgramReport">Program Report</label>
          <DefaultEditor name='ProgramReport' value={html} onChange={handleReportChange} />
          <button type="submit">Add Report</button>
        </form>

    </div>
  );
}; export default ProgramsCMS;