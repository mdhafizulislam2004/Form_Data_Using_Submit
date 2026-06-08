import { useState } from "react";

const UseInputField = (defaultValue) => {
    const[fieldValue,setFieldValue]=useState(defaultValue)


    const hendalerOnchange=(e)=>{
        setFieldValue(e.target.value)
    }
    return[fieldValue,hendalerOnchange]

};

export default UseInputField;