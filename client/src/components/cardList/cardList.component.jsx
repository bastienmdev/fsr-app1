import { useState, useEffect } from 'react';

//components
import UserCard from '../card/userCard.component';

import './cardList.style.css';

const CardList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const URL = 'http://localhost:5000/api/users';
        fetch(URL)
            .then(response => response.json())
            .then(apiUsers => {
            console.log(apiUsers)
        setUsers(apiUsers);
        });
    }, []);


    return (
        <div className='cardList-container'>
        {
            users.map(user => (
                <UserCard key={user.id} name={user.name} occupation={user.occupation} email={user.email}/>
            ))
        }
        </div>
    );
}

export default CardList;