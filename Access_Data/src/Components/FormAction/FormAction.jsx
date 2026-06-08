const FormAction = () => {


    const hendalerForm=(event)=>{
        console.log(event.get('name'));
        console.log(event.get('email'));
    }

    return (
        <div>
            <form action={hendalerForm}>
                <input type="text" placeholder="Entar Your Name" name="name" />
                <br />
                <input type="email" name="email" id="" placeholder="Entar Email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;