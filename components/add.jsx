import { useState } from "react";
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

/* const ProfileCard = () => {
    const styles = {
        backgroundColor: "lightblue",
        padding: "15px",
        borderRaduis: "8px",
        color: "black",
    }
    return <div style={styles}> 
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tempore saepe quisquam voluptas harum itaque magni nemo natus, odio aliquid.</p>
           </div>
}
export default ProfileCard; */

/* const CompomentOne = ({ count, onClickHandler }) => {
    
   const handlerClick = () => onClickHandler();

   return (
       <div>
           <p> {count} </p>
           <button onClick={handlerClick}></button>
       </div>
   )
} */

/* import { useEffect, useState } from "react";

const ExampleOne = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    })

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <button onClick={increment}></button>
        </div>
    )
}

const Exampletwo = () => {
    const [random, setRandom] = useState(() => Math.floor(Math.random() * 100))

    const generateRandom = () => {
        const newNumber = Math.floor(Math.random() * 100)
        setRandom(newNumber)
    }

    return (
        <div>
            <h1>Random Number: {random}  </h1>
            <button onClick={generateRandom}>Generate Nex Number</button>
        </div>
    )
}

const ExampleThree = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name")
        return savedName ? JSON.parse(savedName) : ""
    })

    useEffect(() => {
        localStorage.setItem("name, JSON.stringnify(name"),
            [name]
    })

    const handlerChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h1>Your Name {name} </h1>
            <input type="text" value={name} onChange={handlerChange} placeholder="Enter your name" />
            <button onClick={handlerClear}>Clear Name</button>
        </div>
    )
} */

/* import { useState } from "react";    
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>You click {count} times </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
export default App ;

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (e => {
        e.preventDefault()
        if (inputValue.trim()) {
            setTodos([...todos, inputValue])
            setInputValue("")
        }
    })

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleSubmit} placeholder="Add a new Todo" />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo, index) => {
                <li key={index}> {todo} </li>
                })}
            </ul>
        </div>
    )
} */

/* const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <section>
      <h2>User Profile</h2>
      <div>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age :
          <input
            type="text"
            name="name"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3>Profile Informations</h3>
      <p>Name: {profile.name} </p>
      <p>Age: {profile.name} </p>
    </section>
  );
};

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
        name,
        quantity: parseInt(quantity),

        setItems((prevItems) => [...prevItems, newItem]),
        SetName("");
        setQuantity("")
    }
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
            <li key={item}>
                {item.name} - Quantity: {item.quantity}
            </li>
        ))}
      </ul>
    </div>
  );
}; */

/* import PopupContent from "./PopupContent"
import { createPortal } from "react-dom";

const copyInput = () => {
    const [inputValue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }
    
    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleCopy}> Copy</button>
            <PopupContent />
        </div>
    )
}

const PopupContent = ({ copied }) => {
    return createPortal(
        <section>
            {copied && (
                <div style={{ position:"absolute", bottom: "3rem"}} > Copied to clipboard</div>
            )}
        </section>
    )
}

const Switcher = () => {
    const [sw, setSw] = useState(false)

    return (
        <div>
            { sw ? (
                <span>Dark</span>
            ) : (
                <span>Light</span>
            )} 

            <br />

            <input type="text" key={sw ? "dark" : "light"} />
            <button onClick={() => setSw((s) => !s)}>Switch</button>
        </div>
    )
} */