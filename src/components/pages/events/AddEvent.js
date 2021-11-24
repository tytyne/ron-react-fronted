import React, { useState, useRef, useEffect } from "react";
import "./event.css";
import { Grid } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import DiscussionSpaceService from "../../../services/discussionSpace.service";
import HostTypeService from "../../../services/hostType.service";
import { v4 as uuidv4 } from "uuid";
// import Moment from 'react-moment';
// import 'moment-timezone';
import moment from "moment"

const initialFValues = {
  Id:0,
  EventTitle: "",
  EventStartTime:moment(new Date("2021-09-28 7:30:20")).format(),
  EventDuration: 10,
  EventDescription: "",
  EventStreamEnbedCode: "",
  HostType: "",
  HostDiscussionSpaceId:0,
  EventStatus:1
};
// const currentDate = new Date()


export default function EventForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [space, setSpace] = useState([]);
  const [hosts, setHosts] = useState([]);

  React.useEffect(() => {
    HostTypeService.getHosts().then((res) => {
      setHosts(res.resultData);
    });
  }, []);

  React.useEffect(() => {
    DiscussionSpaceService.discussionSpace().then((res) => {
      setSpace(res.resultData);
    });
  }, []);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("EventTitle" in fieldValues)
      temp.EventTitle = fieldValues.EventTitle ? "" : "This field is required.";
    if ("EventDescription" in fieldValues)
      temp.EventDescription = fieldValues.EventDescription
        ? ""
        : "This field is required.";

    // if ("EventStreamEnbedCode" in fieldValues)
    //   temp.EventStreamEnbedCode =
    //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
    //       fieldValues.EventStreamEnbedCode
    //     )
    //       ? ""
    //       : "The link is required.";

    // if ("EventStartTime" in fieldValues)
    //   temp.EventStartTime =
    //     fieldValues.EventStartTime < currentDate
    //       ? ""
    //       : " This field is required!";

    // if ("EventDuration" in fieldValues)
    //   temp.EventDuration = fieldValues.EventDuration
    //     ? ""
    //     : "This field is required.";

    // if ("HostType" in fieldValues)
    //   temp.HostType =
    //     fieldValues.HostType.length != 0 ? "" : "This field is required.";
    // if ("HostDiscussionSpaceId" in fieldValues)
    //   temp.HostDiscussionSpaceId =
    //     fieldValues.HostDiscussionSpaceId.length != 0
    //       ? ""
    //       : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  let { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  var data = {
    EventTitle: values.EventTitle,
    EventStartTime: values.EventStartTime,
    EventDuration: values.EventDuration,
    EventDescription: values.EventDescription,
    EventStreamEnbedCode: values.EventStreamEnbedCode,
    HostType: values.HostType,
    HostDiscussionSpaceId: values.HostDiscussionSpaceId,
    EventStatus:values.EventStatus
  };
  console.log("check daaaataaa",data)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
      console.log("check validations")
      console.log("check ... data", values);
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
            label="Event Title"
            name="EventTitle"
            value={values.EventTitle}
            onChange={handleInputChange}
            // error={errors.EventTitle}
          />
          <Controls.DateTimePickery
            label="Event Start Time"
            name="EventStartTime"
            value={moment(values.EventStartTime).format()}
            onChange={handleInputChange}
            // error={errors.EventSartTime}
          />
          <Controls.Input
            label="Event Duration"
            name="EventDuration"
            value={Number(values.EventDuration)}
            onChange={handleInputChange}
            // error={errors.EventDuration}
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
            name="EventStreamEnbedCode"
            value={values.EventStreamEnbedCode}
            onChange={handleInputChange}
          />
          <Controls.SelectTarget
            name="HostType"
            label="Host Type"
            value={values.HostType}
            onChange={handleInputChange}
            options={hosts}
            // error={errors.HostType}
          />
          <div>
            {data.HostType == "2" ||
            data.HostType == "4" ||
            data.HostType == "" ? (
              ""
            ) : (
              <Controls.SelectDiscussion
                name="HostDiscussionSpaceId"
                label="Host Discussion Space"
                value={values.HostDiscussionSpaceId}
                onChange={handleInputChange}
                options={space}
                error={errors.HostDiscussionSpaceId}
              />
            )}
          </div>
          {/* <Controls.SelectActivation
            name="EventStatus"
            label="EventStatus"
            value={values.EventStatus}
            onChange={handleInputChange}
           
          /> */}
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
