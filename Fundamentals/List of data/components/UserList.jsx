const UserList = () => {
    const users = [
        { id: 1, name: "Nehemie", age: 20 },
        { id: 2, name: "Waheed", age: 27 },
        { id: 3, name: "Jordan", age: 23 },
    ];

    return (
        <div>
            {users.map((u) => (
                <div key={u.id}>
                    <h1>Name: {u.name} </h1>
                    <h1>Age: {u.age} </h1>
                </div>
            ))}
        </div>
    )
}

export default UserList;