import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import UserDataService from "../../../services/user.service";
import axios from "axios";



export default function UserForm(props) {
  const initialFValues = {
    Id: null,
    FirstName:'',
    LastName:'',
    Email:'',
    Phone:'', 
   
  
   
    
  };
 
  const [submitted, setSubmitted] = useState(false);
  const { addOrEdit, recordForEdit } = props;
//   const [drops, setDrops] = React.useState([]);

//   const getDropDowns=()=>{
//     axios.get('http://localhost:5000/api/v1/events/titles')
//     .then((response)=>{
//       console.log(response)
//       const myRespo=response.data
//       setDrops(myRespo)
//   }).catch((e)=>{
//     console.log(e)
//   })
// }



//   React.useEffect(() => {
//     hostTypeService.eventTitles().then(res => {
//       setDrops(res.data);
//     });
//   }, []);
  

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("FirstName" in fieldValues)
      temp.FirstName = fieldValues.FirstName ? "" : "This field is required.";
    if ("LastName" in fieldValues)
    temp.LastName = fieldValues.LastName ? "" : "This field is required.";
    if ("Email" in fieldValues)
    temp.Email = fieldValues.Email ? "" : "This field is required.";
      temp.Email = /$^|.+@.+..+/.test(fieldValues.Email)
        ? ""
        : "Email is not valid.";
    if ("Phone" in fieldValues)
      temp.Phone = fieldValues.Phone.length > 9 ? "" : "Minimum 10 numbers required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  let { values, setValues, errors, setErrors,handleInputChange,resetForm } =
    useForm(initialFValues, true, validate);

  


    var data = {
      FirstName:values.FirstName,
      LastName:values.LastName,
      Email:values.Email,
      Phone:values.Phone
    };
    // const saveSpeaker=()=>{

    UserDataService.insertUser(data)
      .then(response => {
        setValues({
        
          FirstName:response.data.FirstName,
          LastName:response.data.LastName,
          Email:response.data.Email,
          Phone:response.data.Phone
        },
        console.log(response)
        );
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });

      UserDataService.updateUser(data)
      .then(response => {
        setValues({
          LastName:response.data.LastName,
          FirstName:response.data.FirstName,
          Email:response.data.Email,
          Phone:response.data.Phone,
    
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="FirstName"
            label="FirstName"
            value={values.FirstName}
            onChange={handleInputChange}
            error={errors.FirstName}
          />
           <Controls.Input
            name="LastName"
            label="LastName"
            value={values.LastName}
            onChange={handleInputChange}
            error={errors.LastName}
          />
     
         
        </Grid>
        <Grid item xs={6}>
          
        <Controls.Input
            label="Email"
            name="Email"
            value={values.Email}
            onChange={handleInputChange}
            error={errors.Email}
          />
          <Controls.Input
            label="Mobile"
            name="Phone"
            value={values.Phone}
            onChange={handleInputChange}
            error={errors.Phone}
          />
        
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
  
}
