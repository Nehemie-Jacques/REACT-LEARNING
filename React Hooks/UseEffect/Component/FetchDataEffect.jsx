import { useState, useEffect } from "react";

const FetchDataEffect = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        }

        fecthData();
    }, []);

    return (
        <div>
            <h1>First Post Title: </h1>
            {posts.length > 0 ? <h2> {posts[0].title} </h2> : <p>Loading...</p>  }
        </div>
    )
}

export default FetchDataEffect;