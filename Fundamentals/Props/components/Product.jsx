const Product = (props) => {
    return (
        <div>
            <h1>Product Name: {props.name}</h1>
            <h1>Product Age: {props.price}</h1>
        </div>
    );
};

export default Product;