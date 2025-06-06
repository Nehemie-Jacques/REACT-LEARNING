import Person from "./components/Person";
import Product from "./components/Product";

function App() {
    return (
        <>
            <Person name="Nehemie" age={20} />
            <Product name="Laptop" price={50000} />
        </>
    );
}

export default App;