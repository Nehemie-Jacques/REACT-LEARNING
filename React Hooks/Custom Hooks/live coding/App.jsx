import useFecth from "./useFecth";

const Home = () => {
    const [data] = useFecth("https://jsonplaceholder.typicode.com/posts");

    return (
        <>
           {data && 
             data.map((item) => {
                 return (
                    <ul key={item.id}>
                        <li> {item.title} </li>
                    </ul>
                 )
             })}
        </>
    )
}

const App = () => {
    return <Home /> 
}

export default App;