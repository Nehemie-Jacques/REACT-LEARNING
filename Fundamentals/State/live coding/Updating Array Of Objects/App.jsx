import { useState } from "react";

const App = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Avengers", ratings: 8 },
        { id: 2, title: "Iron Man", ratings: 7 },
    ])

    const handleClick = () => {
        setMovies (
            movies.map((m) => (m.id === 1 ? { ...movies, title: "Avengers updated" } : m))
        )
    }

    return (
        <div>
            {movies.map((movies) => (
                <li key={Math.random()}> {movies.title} </li>
            ))}
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default App