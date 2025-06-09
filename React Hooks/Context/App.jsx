import { UserProvider } from "./UseContext";
import UserProfile from "./Components/UserProfile";
import UpdateUser from "./Components/UpdateUse";

const App = () => {
    return (
        <UserProvider>
            <UserProfile />
            <UpdateUser />
        </UserProvider>
    )
}

export default App