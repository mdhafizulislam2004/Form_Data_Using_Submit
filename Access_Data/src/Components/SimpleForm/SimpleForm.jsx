const SimpleForm = () => {

    const submitHendaler = (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);

    }

    return (
        <div style={{ textAlign: "center" }}>
            <form action="" onSubmit={submitHendaler}>
                <input type="text" placeholder="Enter Your Name" name="name" />
                <br />
                <input type="email" name="email" placeholder="Your Email" id="" />
                <br />
                <input style={{ marginTop: "10px" }} type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;