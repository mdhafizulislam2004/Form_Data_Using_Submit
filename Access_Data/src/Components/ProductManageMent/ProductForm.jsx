const ProductForm = () => {

    const hendaleProductSubmit = (e) => {
        e.preventDefault()

        const name=e.target.name.value
        const password=e.target.password.value
        const quantity=e.target.quantity.value

        const hendaler = {
            name,
            password,
            quantity,
        }
        console.log(hendaler);
        
    }

    return (
        <div>
            <h1>Add A Product</h1>
            <form onSubmit={hendaleProductSubmit}>
                <input type="text" placeholder="Your Name" name="name" />
                <br />
                <input type="password" name="password" placeholder="Password" id="" />
                <br />
                <input type="text" name="quantity" placeholder="Quantity" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProductForm;