import { useState } from "react";

const App = () => {
    const [movie, setMovie] = useState({
        title: "Inception",
        ratings: 7,
    });

    const handleClick = () => {
        setMovie({ ...movie, ratings: 5 })
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>{movie.ratings}</h2>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}    

export default App