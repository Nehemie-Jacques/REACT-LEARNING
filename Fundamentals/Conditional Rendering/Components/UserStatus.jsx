const UserStatus = (props) => {
    if (props.loggedIn && props.isAdmin) {
        return <div>Welcome Admin</div>;
    } else {
        return <div>Welcome User</div>;
    }
} 

export default UserStatus