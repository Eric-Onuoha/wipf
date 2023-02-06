import React, { useState } from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { addPrograms } from '../../reduxStore/actionDispatches';
import { useDispatch } from "react-redux";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

import { getMultipleDocuments } from '../../firestore/getFromFirestore.utils';

const ProgramsCMS = () => {
  const dispatch = useDispatch();
  const [html, setHtml] = useState(" ");
  const [formFields, setFormFields] = useState(" ");
  const {title, date, theme, image} = formFields;
  
  const handleReportChange = (e) => {
    const {name, value} = e.target;
    setHtml(value);
    setFormFields({...formFields, [name]:value});
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formFields[0] === " "){
      delete formFields[0];
    }

    try{
      addCollectionAndDocuments("Programs", undefined, formFields);
      getMultipleDocuments("Programs").then((ProgramsDB) => dispatch(addPrograms(ProgramsDB)));
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
          <input onChange={handleChange} name='ProgramDate' value={date} type="text" />
          <br />
          <label htmlFor="ProgramTheme">Program Theme</label>
          <br />
          <input onChange={handleChange} name='ProgramTheme' value={theme} type="text" />
          <br />
          <label htmlFor="ProgramImage">Program Image Url</label>
          <br />
          <input onChange={handleChange} name='ProgramImage' value={image} type="text" />
          <br />
          <label htmlFor="ProgramReport">Program Report</label>
          <DefaultEditor name='ProgramReport' value={html} onChange={handleReportChange} />
          <button type="submit">Add Report</button>
        </form>

    </div>
  );
}; export default ProgramsCMS;