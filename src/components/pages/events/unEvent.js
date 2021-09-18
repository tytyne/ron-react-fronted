import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./event.css";
import EventDataService from "../../../services/event.service";

// import AuthService from "../../../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const AddEvent = () => {
  const[discussions,setDiscussions]=React.useState("hideDiscForm")
//host types
function HostTypeDropDown() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState(2);


  React.useEffect(() => {
    let unmounted = false;
    async function gethostTypes() {
      const response = await fetch(
        "http://localhost:5000/api/v1/hosts"
      );
      console.log(response);
      const body = await response.json();
      console.log(body)
      if (!unmounted) {
        setItems(
          body.resultData.map(({ HostType,Id }) => ({
            label: HostType,
            value: Id,
          }))
        );
      
        setLoading(false);
      }
    }
    gethostTypes();
    return () => {
      unmounted = true;
    };
  }, []);
  function handleHostTypes(e){

    setValue(e.currentTarget.value)
    console.log(value)
    if(value==1 || value==3){
     return setDiscussions("showDiscForm")
    }
    if(value==2 || value==4){
     return setDiscussions("hideDiscForm")
    }
   
  }

  return (
    <select
      disabled={loading}
      value={value}
      onChange={handleHostTypes}
      

    >
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
// discussion space
function DiscussionDropDown() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState("Yabo");
  React.useEffect(() => {
    let unmounted = false;
    async function getdiscussion() {
      const response = await fetch(
        "http://localhost:5000/api/v1/discussions"
      );
      console.log(response);
      const body = await response.json();
      console.log(body.resultData);
      if (!unmounted) {
        setItems(
          body.resultData.map(({ Name,Id }) => ({ label: Name, value: Id }))
        );
        setLoading(false);
      }
    }
    getdiscussion();
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <select
      disabled={loading}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}



  const initialTutorialState = {
    Id: null,
    EventTitle: "",
    EventStartTime: "",
    EventDuration:"",
    EventDescription: "",
    EventStreamEnbedCode: "",
    HostType: "",
    HostDiscussionSpace: "",
  };
  // const [events, setEvents] = useState(initialTutorialState);
  // const [submitted, setSubmitted] = useState(false);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setEvents({ ...events, [name]: value });
  // };

  // const saveEvent = () => {
    var data = {
      EventTitle: events.title,
      EventStartTime: events.description,
      EventDuration: events.EventDuration,
      EventDescription: events.EventDescription,
      EventStreamEnbedCode: events.EventStreamEnbedCode,
      HostType: events.HostType,
      HostDiscussionSpace: events.HostDiscussionSpace,
    };

    EventDataService.insertEvent(data)
    console.log(response)
      .then((response) => {
        setEvents({
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
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });


      EventDataService.updatetEvent(data)
      console.log(response)
        .then((response) => {
          setEvents({
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
          console.log(response.data);
        })
        .catch((e) => {
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
    <div id="login">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column">
          <div id="login-box">
            <form id="login-form" class="form" action="" method="post">
              <h4 class="text-left">Add Event</h4>
              <div class="form-group">
                <label for="event-title">Event Title</label>
                <input
                  type="text"
                  // value={data.EventTitle}
                  // onChange={handleInputChange}
                  name="title"
                  placeholder="Enter your Event"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="event-start">Event start Time</label>
                <input
                  type="date"
                  id="start"
                  // value={data.EventStartTime}
                  // onChange={handleInputChange}
                  name="title"
                />
              </div>
              <div class="form-group">
                <label for="duration">Duration(in mins)</label>
                <input
                  type="text"
                  // value={data.EventDuration}
                  // onChange={handleInputChange}
                  name="title"
                  placeholder="duration"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="event-description">Event Description</label>
                <input
                  type="text"
                  // value={data.EventDescription}
                  // onChange={handleInputChange}
                  name="title"
                  placeholder="Enter event description"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="event-link">Event Link</label>
                <input
                  type="text"
                  // value={data.EventStreamEnbedCode}
                  // onChange={handleInputChange}
                  name="title"
                  placeholder="Enter event link"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="host-type">Host Types</label>
                <HostTypeDropDown />
              </div>
              <div class="form-group" id={discussions}>
                <label for="host-type">Discussion Space</label>
                <DiscussionDropDown />
              </div>
              <div class="form-group">
                <button type="button">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AddEvent;
