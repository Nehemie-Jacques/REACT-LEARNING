import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useState } from "react";
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

/* const App = () => {

  return (
    <User  
       img = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       nom = "Nehemie"
       age = {20}
       isMarried = { false }
       hobiies = {[ "coding", "reading", "watching" ]}
    />
  )
}

const User = ({ img, nom, age, isMarried, hobiies  }) => {
  return (
    <section>
      <img src={img} alt={nom} width={200}  />
      <h1> Name: {nom} </h1>
      <h1> Age: {age} </h1>
      <h1> Is married: {isMarried} </h1>
      <h1> Hobbies: {hobiies} </h1>
    </section>
  )
}

export default App; */

/* import Person from "../components/Person.jsx";
import Product from "../components/Product.jsx";

const App = () => {
  return (
    <div>
      <Person 
        nom = "Nehemie"
        age = {20}
        isMarried = { false }
      />

      <Product 
        nom = "Laptop"
        price = {3500}
      />
    </div>
  ) 
}

export default App; */

/* const App = () => {
  return (
    <div>

      <Card>
        <h1>My Card 1</h1>
        <p>This is my card 1</p>
      </Card>

      <Card>
        <h1>My Card 2</h1>
        <p>This is my card 2</p>
      </Card>


      <Card>
        <h1>My Card 3</h1>
        <p>This is my card 3</p>
      </Card>

    </div>
  );
}; */

/* const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({ isValid }) => 
  isValid ? <ValidPassword /> : <InvalidPassword />

const App = () => {
  return (
    <section>
      <Password isValid={true} />
    </section>
  )
} */

/*const App = () => {

  const items = ["Laptop", "Phone", "Tablet", "Watch"];

  return (
    <div>
      <h1> Cart </h1>
      {items.length > 0 && <h3> You have {items.length} items in your cart </h3>}

      <ul>
        <h4>Products</h4>
        {items.map((item) => {
          <li key={Math.random()}> {item} </li>
        })}
      </ul>
    </div>
  )
} */

/* import Weather from "../components/Weather.jsx";
import UserStatus from "../components/UserStatus.jsx";

const App = () => {
  return (
     <div> 
      <Weather />
      
      <UserStatus loggerIn = {true} isAdmin = {false} />

      <Greeting timeOfDay = "morning"  />
    </div>
  )
}

  export default App; */

/* import { FaArrowAltCircleDown } from "react-icons/fa";

const App = () => {

  const styles = { color: "white", backgroundColor: "crimson", padding: "2rem" }

  return (
    <section>
      <h1 style={styles}> My website </h1>
      <FaArrowAltCircleDown />
    </section>
  )
}

export default App; */


/* import ProfuleCard from "../components/ProfileCard.jsx";
import StyleCard from "../components/StyleCard.jsx";

const App = () => {

  return (
    <div>
      <ProfuleCard />
      <StyleCard />
    </div>
  )
}
export default App; */

/* const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() + 10));
  return <button onClick={handleClick}></button>
}

const Copy = () =>  {
  const copyHandler = () => {
    console.log("Stop stealing my content")
  }
  return (
    <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  )
}

const Move = () => {
  function moveHandler() {
    alert("Mouse move event fired")
    console.log("Mouse move event fired")
  }
  return (
    <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quidem.</p>
  )
} 

const App = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  )
} */

/* import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const [friends, setFriends] = useState(["Alex", "John"])

  const addOneFriends = () => setFriends([...friends, "Nehemie"])
  const removeneFriends = () => setFriends(friends.filter((f) => f !== "Nehemie"))
  const updateFriend = () => {
    setFriends(friends.map((f) => (f === "Alex" ? "Alex smith" : f)))
  } 

  return (
    <section>
      <div>
        <h1> {count} </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <div>
        {friends.map((f) => (
          <li> key={Math.random()} {f} </li>
        ))}

        <button onClick={addOneFriends}>Add New Friend</button>
        <button onClick={removeneFriends}>Remove Friend</button>
      </div>

    </section>
  )
} */ 

/* import { useState } from "react";
const App = () => {
  const  [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  })

  const handleClick = () => setMovie({ ...movie, ratings: 9})

  return (
    <section> 
      <h1>Title {movie.title} </h1>
      <p>Rating {movie.ratings} </p>
      <button onClick={handleClick}>Change Rating</button>
    </section>
  )
}  */

/* import { useState } from "react";  
const App = () => {
  const [movie, setMovie] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Batman", ratings: 8 },
    { id: 3, title: "Iron Man", ratings: 9 },
  ])

  const handleClick = () => {
    setMovie(movie.map((m) => m.id === 1 ? { ...movie, title: "Spider Man 2"} : m ))
  }

  return (
    <section>
      {movie.map((m) => (
        <li key={Math.random()}> {m.title} </li>
      ))}

      <button onClick={handler}></button>
    </section>
  )
} */

/* import { useState } from "react";
import CompomentOne from "./components/CompomentOne";
import CompomentTwo from "./components/CompomentTwo";

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <section>
      <CompomentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <CompomentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </section>
  )
} */

/* import Counter from "./components/Counter.jsx";
import TodoList from "./components/TodoList.jsx";
import Profile from "./components/profile.jsx"

const App = () => {
  return (
    <section>
      <Counter />
      <TodoList />
      <Profile  />
      <ShoppingList />
    </section>
  )
} */