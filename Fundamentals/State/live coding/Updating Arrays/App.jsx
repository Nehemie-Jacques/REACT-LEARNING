import { useState } from "react";

const App = () => {
    const [friends, setFriends] = useState(["Nehemie", "John", "Waheed", "Jordan"]);

    const addOne = () => setFriends([...friends, "Alex"]);
    const removeOne = () => setFriends(friends.filter((f) => f !== "John"));
    const updateOne = () => setFriends(friends.map((f) => f === "Nehemie" ? "Nehemie updated" : f));

    return (
        <div>
            {friends.map((t) => (
                <li key={Math.random()}>{t}</li>
            ))}
            <button onClick={addOne}>Add</button>
            <button onClick={removeOne}>Remove</button>
            <button onClick={updateOne}>Update</button>
        </div>
    )
}

export default App;