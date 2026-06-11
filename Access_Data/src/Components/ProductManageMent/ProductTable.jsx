const ProductTable = ({ products }) => {
    return (
        <div>
            <h1>Products: {products.length}</h1>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:"center"}}>
                    {
                        products.map((product,index)=>
                            <tr key={index}>
                        <td>{index +1}</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>N/A</td>
                    </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;