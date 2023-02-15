import React, {useState, } from "react";
import { useDispatch } from "react-redux";
import { addStaff } from "../../reduxStore/actionDispatches";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";
import { uploadDocWithImage } from "../../firestore/uploadImage.utils";

const StaffCMS = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState({});
    const {fullName, position} = formFields;
    const [imageUpload, setImageUpload] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(e.target.files !== null) {
        setImageUpload(e.target.files[0]);
        }

        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();      
        try{
            uploadDocWithImage(imageUpload, "Staff", undefined, formFields);          
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
                <input required onChange={handleChange} name="fullName" value={fullName}></input>
                <br />
                <label>Job Title</label>
                <br />
                <input required onChange={handleChange} name="position" value={position}></input>
                <br />
                <label>Image Upload</label>
                <br />
                <input required onChange={handleChange} type="file" name="image"/>
                <br />
                <button>Add Staff</button>
            </form>
        </div>
    )
}; export default StaffCMS;