import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {


    const[products,setProducts]=useState([])

    const hendalerProducts=(newProducts)=>{
        const newProduct=[...products,newProducts]
        setProducts(newProduct)

    }


    return (
        <div>
            <ProductForm hendalerProducts={hendalerProducts}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;