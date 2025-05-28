import Greet from "./Greeting";

const App = () => {
  return <Greet />;
};

export default App;

/* const App = () => {
    return (
        <section id="section">
            <h1>My website</h1>
            <article>
                <h2>Welcome to React</h2>
                <p className="text">Paragraph content</p>
            </article>
        </section>

    )
} */

/* const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
    ];

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>Name: {user.name} </h1>
                    <h1>Age: {user.age} </h1>
                </div>
            ))}
        </div>
    )
}


const ProductList = () => {
    const products = [
        { id: 1, name: "Laptop", price: 1000, availability: "In Stock" },
        { id: 2, name: "Phone", price: 500, availability: "Out of Stock" },
        { id: 3, name: "Tablet", price: 300, availability: "In Stock" },
    ];

    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <h1>Name: {p.name} </h1>
                    <h1>Price: ${p.price} </h1>
                </div>
            ) )}
        </div>
    )
} */

/* const Person = ({ nom, age, isMarried }) => {
  return (
    <div>
      <h2> {nom} </h2>
      <h2> {age} </h2>
      <h2> {isMarried} </h2>
    </div>
  );
};

const Product = ({ nom, price }) => {
  return (
    <div>
      <h2> {nom} </h2>
      <h2> {price} </h2>
    </div>
  );
}; */


/*const Card = ({ Quality }) => {
    return (
        <div> {Quality} </div>
    )
} */

/* const Weather = () => {
    let temp = 26;

    if (temp < 15) {
        return <h1> It's cold outside</h1>
    } else if (temp >= 15 && temp <= 25) {
        return <h1>It's nice</h1>
    } else (temp > 25) {
        return <h1>It's not outsite</h1>
    }
} 

export default Weather;

const UserStatus = (props) {

    if (props.loggerIn && props.isAdmin) {
        return <h1>Welcome Admin</h1>
    } else {
        return <h1>Welcome user</h1>
    }
}
export default UserStatus;

const Greeting = (props) => {
    return props.timeOfDay === "morning" ? (
        <h1>Good Morning ! </h1>
    ) : (
        <h1>Good Afternoon!</h1>
    )
}

export default Greeting; */