import React, { useState, useRef, useEffect } from "react";
import "./event.css";
import { Grid } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import EventDataService from "../../../services/event.service";
import * as employeeService from "../../../services/employeeService";
import discussionService from "../../../services/discussions.service"
import hostTypeService from "../../../services/hostType.service";
import { v4 as uuidv4 } from 'uuid';



const initialFValues = {
  Id:uuidv4(),
  EventTitle: "",
  EventStartTime:new Date(),
  EventDuration:"",
  EventDescription: "",
  EventStreamEnbedCode: "",
  HostType: "",
  HostDiscussionSpace: "",
};

export default function EventForm(props) {
 


  const [submitted, setSubmitted] = useState(false);
  const { addOrEdit, recordForEdit } = props;
  const [space,setSpace]=useState([])
  const [hosts,setHosts]=useState([])




  React.useEffect(() => {
    hostTypeService.getHosts().then(res => {
      setHosts(res.resultData);
    });
  }, []);

  React.useEffect(() => {
    discussionService.getDiscussionSpace().then(res => {
      setSpace(res.resultData);
    });
  }, []);

 


  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("Name" in fieldValues)
      temp.Name = fieldValues.Name ? "" : "This field is required.";
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

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  let { values, setValues, errors, setErrors,handleInputChange,resetForm } =
    useForm(initialFValues, true, validate);


    var data = {
      EventTitle: values.title,
      EventStartTime: values.description,
      EventDuration: values.EventDuration,
      EventDescription: values.EventDescription,
      EventStreamEnbedCode: values.EventStreamEnbedCode,
      HostType: values.HostType,
      HostDiscussionSpace: values.HostDiscussionSpace,
    };
    console.log("get data",data)
    
    
 

    EventDataService.insertEvent(data)
      .then((response) => {
    
        setValues({
          Id: response.data.Id,
          EventTitle: response.data.EventTitle,
          EventStartTime: response.data.EventStartTime,
          EventDuration: response.data.EventDuration,
          EventDescription: response.data.EventDuration,
          EventStreamEnbedCode: response.data.EventStreamEnbedCode,
          HostType: response.data.HostType,
          HostDiscussionSpace: response.data.HostDiscussionSpace,
        });
        console.log(response,"check response")
        console.log(response.data.HostType,"who whooo")
        setSubmitted(true);
        
      })
      .catch((e) => {
        console.log(e);
      });


      EventDataService.updateEvent(data)
        .then((response) => {
          setValues({
            Id: response.data.Id,
            EventTitle: response.data.EventTitle,
            EventStartTime: response.data.EventStartTime,
            EventDuration: response.data.EventDuration,
            EventDescription: response.data.EventDuration,
            EventStreamEnbedCode: response.data.EventStreamEnbedCode,
            HostType: response.data.HostType,
            HostDiscussionSpace: response.data.HostDiscussionSpace,
          });
          setSubmitted(true);
         console.log(response)
        })
        .catch((e) => {
          console.log(e);
        });

        // function handleHostTypes(e){

        //   setValues(e.values.HostType)
        //   console.log("checking valuessss")
        //   console.log("checking values",values)
        //   if(values==1 || values==3){
        //    return setDiscussions("showDiscForm")
        //   }
        //   if(values==2 || values==4){
        //    return setDiscussions("hideDiscForm")
        //   }
         
        // }
  
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
            name="EventTitle"
            label="Event Title"
            value={values.EventTitle}
            onChange={handleInputChange}
            error={errors.EventTitle}
          />
          <Controls.DatePicker
            name="EventStartTime"
            label="Event Start Time"
            value={values.EventStartTime}
            onChange={handleInputChange}
        />
          <Controls.Input
            label="Event Duration"
            name="duration"
            value={values.EventDuration}
            onChange={handleInputChange}
            error={errors.EventDuration}
          />
          <Controls.Input
            label="Event Description"
            name="EventDescription"
            value={values.EventDescription}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
        <Controls.Input
            label="Event link"
            name="EventLink"
            value={values.EventStreamEnbedCode}
            onChange={handleInputChange}
          />
          <Controls.SelectTarget
            name="HostType"
            label="Host Type"
            value={values.HostType}
            onChange={handleInputChange}
            // onChange={checkDiscussions}
            options={hosts}
            error={errors.HostType}
          />
          <div>
          <Controls.SelectDiscussion
            name="HostDiscussionSpaceId"
            label="Host Discussion Space"
            value={values.HostDiscussionSpaceId}
            onChange={handleInputChange}
          
            options={space}
            error={errors.HostDiscussionSpaceId}
          />
          </div>
      
         
            <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};


