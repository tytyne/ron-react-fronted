import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment"
export default function DateTimePickery(props) {

    const { name, label, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,moment(date).format()))}

            />
            
        </MuiPickersUtilsProvider>
    )
}
