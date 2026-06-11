import { useState } from "react";
import { toast } from "react-toastify";

const ProductForm = ({hendalerProducts}) => {

    const [error,setError]=useState("")

    const hendaleProductSubmit = (e) => {
        e.preventDefault()

        const name=e.target.name.value
        const price=e.target.price.value
        const quantity=e.target.quantity.value

        

        // Joto Gulo Error Section Ase Oi Gula Te Jodi Tostify Add Na Kora Hoy Tahole SetError Bosbe 
        if(name.length===0){
           toast.error("Please Entar Product Name")
            return;
        }else if(price<0){
             toast.error("Enter The Price")
        }else if(price.length===0){
             toast.error("Inter The Price")
            return;
        } else if(quantity.length===0){
             toast.error("Please Enter The Quantity")
        }else{
            setError("")
            toast.success("Items Add Success")
        }



        const hendaler = {
            name,
            price,
            quantity,
        }
        // console.log(hendaler);
        hendalerProducts(hendaler)
        
    }

    return (
        <div>
            <h1>Add A Product</h1>
            <form onSubmit={hendaleProductSubmit}>
                <input type="text" placeholder="Your Name" name="name" />
                <br />
                <input type="text" placeholder="Price" name="price" />
                <br />
                <input type="text" name="quantity" placeholder="Quantity" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <small>{error}</small>
        </div>
    );
};

export default ProductForm;