const ProductList = () => {
    const Product = [
        { id: 1, name: "Phone", price: "$5000" },
        { id: 2, name: "Laptop", price: "$10000" },
        { id: 3, name: "Tablet", price: "$3000" },
    ];

    return (
        <div>
            {Product.map((p) => (
                <div key={p.id}>
                    <h1>Name: {p.name}</h1>
                    <h1>Price: {p.price}</h1>
                </div>
            ))}
        </div>
    )
}

export default ProductList;