import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});
  

 
    const handleInputChange = e => {
        const { name, value,files,input} = e.target
        // const upload_file = files[0];
        setValues({
            ...values,
            [name]:value
            // upload_file,
        })


        if (files && files.length) {
            const upload_file = files[0];
            // console.log("check imageeee",upload_file)
            setValues({
                ...values,
                [name]:files
            })
            
         
      
        }
        if (validateOnChange)
            validate({ [name]: value })
    }
    
    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    
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