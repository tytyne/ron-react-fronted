import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import HostService from "../../../services/hostType.service";
import GroupService from "../../../services/group.service";
import broadcastService from "../../../services/broadcast.service";
import Dropzone from "react-dropzone"

export default function BroadcastForm(props) {
  const initialFValues = {
    Id: null,
    Comment: "",
    TargetType: "",
    image: null,
    TargetID: 0,
    Status: false,
  };


  const { addOrEdit, recordForEdit } = props;
  const [hosts, setHosts] = useState([]);
  const [groups, setGroups] = useState([]);

  React.useEffect(() => {
    GroupService.allGroups().then((res) => {
      setGroups(res.resultData);
    });
  }, []);

  React.useEffect(() => {
    HostService.getHosts().then((res) => {
      setHosts(res.resultData);
    });
  }, []);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("Comment" in fieldValues)
      temp.Comment = fieldValues.Comment ? "" : "This field is required.";

    // if ("image" in fieldValues)
    //   temp.image = fieldValues.image ? "" : "This field is required.";

    // setErrors({
    //   ...temp,
    // });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);


  var data = {
    Comment: values.Comment,
    TargetType: values.TargetType,
    image:values.image,
    TargetID: values.TargetID,
    Status: values.Status,
  };
  console.log("dataaaa", data);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit running ....")
    if (validate()) {
      console.log("form validated ....")
      addOrEdit(values,resetForm);
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
            label="Comment"
            name="Comment"
            value={values.Comment}
            onChange={handleInputChange}
            error={errors.Comment}
          />

          <Controls.Input
          {...values}
            name="image"
            type="file"
            onChange={handleInputChange}
           
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.SelectTarget
            name="TargetType"
            label="Target Type"
            value={values.TargetType}
            onChange={handleInputChange}
            options={hosts}
          />
          
          {data.TargetType == "1" || data.TargetType == "" ? (
            ""
          ) : (
            <Controls.SelectGroup
              name="TargetID"
              label="Target Group"
              value={values.TargetID}
              onChange={handleInputChange}
              options={groups}
            />
          )}

          <Controls.SelectStatus
            name="Status"
            label="Status"
            value={values.Status}
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
