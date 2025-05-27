import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

/* 
const app = () => {

    const myName = "Nehemie";
    const multuply = (a, b) => a * b;
    const specialClass = "simple-class";

    return (
        <section>

            <p> 2 + 2 = {2 + 2}</p>
            <h1> {myName} </h1>
            <p> Friends List: {["Alex", "John", "Mohamed", "Jordan"]}</p>
            <p> 2 + 2 = {multuply(2,3)} </p>
            <p> className = {specialClass} This is special class </p>
        </section>
    )
 }
    export default app;
*/

/* const ProductInfo = () => {
  
  const product = {
    name: "Laptop",
    price: 2000,
    availability: "In Stock",
  };

  return (
    <div>
      <h1>Name: {product.name} </h1>
      <h1>Price: {product.price} </h1>
      <h1>availability: {product.availability} </h1>
    </div>
  )
}; */

/* const App = () => {

  const numbers = [1, 2, 3, 4, 5];
  return 
  <main>
    { numbers.map((number) => (
      <ul key={number}>
        <li>{number}</li>
      </ul>
    ) )}
  </main>
}
*/

/* const App = () => {
  const userInfo = [
    { username: "Job", email: "job@gmail.com", age: 25 },
    { username: "Robert", email: "robert@gmail.com", age: 33, },
    { username: "Jean", email: "jean@gmail.com", age: 27, },
  ];

  return (
    <main>
      {usersInfo.map(({ username, email, age }) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{age}</li>
        </ul>
      ))}
    </main>
  );
};  */
