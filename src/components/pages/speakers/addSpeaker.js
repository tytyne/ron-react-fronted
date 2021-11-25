import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import eventService from "../../../services/event.service";




export default function SpeakerForm(props) {
  const initialFValues = {
    Id:0,
    Email:'',
    LiveStreamEventID:'',
    Name:'',
    Phone:'', 
    About:'', 
    Title:'',
    Moderator:false
   
    
  };
 
  const [submitted, setSubmitted] = useState(false);
  const { addOrEdit, recordForEdit } = props;
  const [drops, setDrops] = React.useState([]);




  React.useEffect(() => {
    eventService.eventTitles().then(res => {
      setDrops(res.data);
    });
  }, []);
  

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("Name" in fieldValues)
      temp.Name = fieldValues.Name ? "" : "This field is required.";
    if ("About" in fieldValues)
    temp.About = fieldValues.About ? "" : "This field is required.";
    if ("Title" in fieldValues)
    temp.Title = fieldValues.Title ? "" : "This field is required.";
    if ("Email" in fieldValues)
    temp.Email = fieldValues.Email ? "" : "This field is required.";
    if ("Email" in fieldValues)
      temp.Email = /$^|.+@.+..+/.test(fieldValues.Email)
        ? ""
        : "Email is not valid.";
    if ("Phone" in fieldValues)
      temp.Phone =
        fieldValues.Phone.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("LiveStreamEventID" in fieldValues)
      temp.LiveStreamEventID =
        fieldValues.LiveStreamEventID.length != 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === "");
  };

  let { values, setValues, errors, setErrors,handleInputChange,resetForm } =
    useForm(initialFValues, true, validate);


    // var data = {
    //   Name:values.Name,
    //   Email:values.Email,
    //   Phone:values.Phone,
    //   About:values.About,
    //   Title:values.Title,
    //   LiveStreamEventID:values.LiveStreamEventID
    // };
    // console.log("check data",data)
  

 

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
            name="Name"
            label="Full Name"
            value={values.Name}
            onChange={handleInputChange}
            error={errors.Name}
          />
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
          <Controls.Input
            label="About"
            name="About"
            value={values.About}
            onChange={handleInputChange}
            // error={errors.About}
          />
        </Grid>
        <Grid item xs={6}>
          
          <Controls.SelectEvent
            name="LiveStreamEventID"
            label="Events"
            value={values.LiveStreamEventID}
            onChange={handleInputChange}
            options={drops}
            error={errors.LiveStreamEventID}
              />
      
          <Controls.Input
            label="Title"
            name="Title"
            value={values.Title}
            onChange={handleInputChange}
            // error={errors.Title}
          />

          <Controls.Checkbox
            name="Moderator"
            label="Moderator Speaker"
            value={values.Moderator}
            onChange={handleInputChange}
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
