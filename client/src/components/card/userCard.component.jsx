import './userCard.style.css';

const UserCard = ({name, occupation, email}) => (
    <div className='card-container'>
        <h1>{name}</h1>
        <p>{occupation}</p>
        <p>{email}</p>
    </div>
)

export default UserCard;
