import { useState } from "react";

const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() => 
        Math.floor(Math.random() * 100)
    );

    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newNumber);
    };

    return (
        <div>
            <p>Random Number: {randomNumber}</p>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    );
};

export default ExampleTwo;
