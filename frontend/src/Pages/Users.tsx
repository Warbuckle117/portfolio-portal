import React from 'react';

interface User {
    username: string
}
interface UserProps {
    users: User[]
}



const Users = () => {

    return (
        <div>
            Users Page
        </div>
    );
};

export default Users;