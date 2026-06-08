import UseInputField from "../../Hooks/UseInputField";

const HookForm = () => {


    const[name,nameOnchange]=UseInputField("")
    const[email,emailOnchange]=UseInputField("")

    const eventHendaler=(e)=>{
        e.preventDefault()
        console.log("Submitte",name,email);
    }


    return (
        <div>
            <form onSubmit={eventHendaler}>
                <input type="text" defaultValue={name} placeholder="Your Name" onChange={nameOnchange} />
                <br />
                <input type="email" name="email" defaultValue={email} placeholder="Your Email" onChange={emailOnchange} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;