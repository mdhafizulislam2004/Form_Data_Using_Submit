import { useState } from "react";
import { toast } from "react-toastify";

const ControlleField = () => {

    const[password,setPassword]=useState('')
    const[error,setError]=useState('')

    const submitHendaler=(e)=>{
        e.preventDefault()
        // console.log("submited");

        if(password.length<6){
            toast.error("Must 6 Charactors") // jodi Ai Jaigai TostiFay Add Na Kori Tahole SetError Hobe
        }else{
            setError("")
            toast.success("Submmited")
        }
        
    }

    const passwordHendaler=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHendaler}>
                <input type="email" name="email" id="" placeholder="Your Email" required />
                <br />
                <input type="password" name="password" id="" defaultValue={password} onChange={passwordHendaler} placeholder="Password" required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color:"red"}}>{error}</p>
        </div>
    );
};

export default ControlleField;
