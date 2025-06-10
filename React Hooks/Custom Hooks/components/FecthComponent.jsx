import useFecth from "../hooks/useFecth";

const FecthComponent = () => {
    const { data, loading, error } = useFecth(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message} </p>;

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}> {post.title} </li>
            ))}
        </ul>
    )
}

export default FecthComponent;