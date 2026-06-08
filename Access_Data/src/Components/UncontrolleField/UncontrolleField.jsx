import { useRef } from "react";

const UncontrolleField = () => {


    const emailRef=useRef("")
    const PasswordRef=useRef("")

    const hendaler=(e)=>{
        e.preventDefault()
        const email=emailRef.current.value;
        const password=PasswordRef.current.value;
        console.log(email,password);
    }


    return (
        <div>
            <form onSubmit={hendaler}>
                <input type="email" ref={emailRef} name="email" />
                <br />
                <input type="password" ref={PasswordRef} name="password"/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};
export default UncontrolleField;