import React, {useState, } from "react";
import { useDispatch } from "react-redux";
import { addStaff } from "../../reduxStore/actionDispatches";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";

const StaffCMS = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState({});
    const {fullName, position, image} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        try{
        addCollectionAndDocuments("Staff", undefined, formFields);
        getMultipleDocuments("Staff").then((StaffDB) => dispatch(addStaff(StaffDB)));
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
            <h1>WIPF Staff Form</h1>
            <form onSubmit={handleSubmit}>
                <label>FIrst and Last Name</label>
                <br />
                <input onChange={handleChange} name="fullName" value={fullName}></input>
                <br />
                <label>Job Title</label>
                <br />
                <input onChange={handleChange} name="position" value={position}></input>
                <br />
                <label>Image Upload</label>
                <br />
                <input onChange={handleChange} name="image" value={image}></input>
                <br />
                <button>Add Staff</button>
            </form>
        </div>
    )
}; export default StaffCMS;