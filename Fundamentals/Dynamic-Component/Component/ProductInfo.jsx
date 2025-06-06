const ProductInfo = () => {
    const Product = {
        name: "Laptop",
        price: 50000,
        availability: "In stock",
    };
    return (
        <div>
            <h1>Name: {Product.name}  </h1>
            <p>Price: {Product.price}</p>
            <p>Availability: {Product.availability}</p>
        </div>
    );
};

export default ProductInfo;