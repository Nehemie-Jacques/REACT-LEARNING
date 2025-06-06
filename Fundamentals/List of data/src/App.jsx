// Example 1
/* const App = () => {
    const number = [1, 2, 3, 4, 5];
    return (
       <main>
           {number.map((number) => (
            <ul key={Math.random()}>
                <li>{number}</li>
            </ul>
           ))}
       </main>
    )
} */

// Example 2
/* const App = () => {
    const usersInfo = [
        {
            username: "Robert",
            email: "robert@gamil.com",
            location: "USA",
        },
        {
            username: "Jean",
            email: "jean@gamil.com",
            location: "PANAMA",  
        },
        {
            username: "Junior",
            email: "junior@gamil.com",
            location: "NEPAL",
        },
    ];

    return (
        <section>
            {usersInfo.map((user) => (
                <ul key={Math.random()}>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.location}</li>
                </ul>
            ))}
        </section>
    );
}; */

import "./shopping.css"

const Shopping = ({ items }) => {
    return (
        <section>
            <ol>
                {items.map((item) => (
                    <li key={Math.random() * 5}> {item} </li>
                ))}
            </ol>
        </section>
    )
}

const App = () => {
    return (
        <section>
            <Shopping items={["Phone", "Tablet", "Laptop"]} />
        </section>
    )
}

export default App;