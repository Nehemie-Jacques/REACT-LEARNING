import { useState, useEffect } from "react";

const ExampleThree = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";
    })

    useEffect(() => {
        localStorage.setItem("name, JSON.stringify(name))");
    }, [name]);

    const handleChnage = (event) => {
        setName(event.target.value);
    };

    const handleClear = () => {
        setName("");
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <input type="text" value={name} onChange={handleChnage} placeholder="Enter your name"/>
            <button onClick={handleClear}>Clear Name</button>
        </div>
    )
}

export default ExampleThree;