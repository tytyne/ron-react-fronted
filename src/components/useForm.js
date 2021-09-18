import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});
    const [selectedFile,setSelectedFile]=useState(null)

 
    const handleInputChange = e => {
        const { name, value,id ,files} = e.target
      
        setValues({
            ...values,
            [name]: value,
             
        })
        if (files && files.length) {
            const upload_file = files[0];
            console.log("check imageeee",upload_file)
            console.log("check imageeee name",upload_file.name)
           
        }
        if (validateOnChange)
            validate({ [name]: value })
    }
    
    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
        setSelectedFile(null)
        
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}