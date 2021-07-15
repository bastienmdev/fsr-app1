import FormButton from "../button/formButton.component";

const UserForm = () => {
    return (
        <div>
            <form action='http://localhost:5000/api/users' method='POST'>
                <label htmlFor='userName'>User Name </label>
                <input id='userName' type='text' name='name' placeholder='Name' required />

                <label htmlFor='occupation'>Occupation </label>
                <input id='occupation' type='text' name='occupation' placeholder='Form Filler?' required />

                <label htmlFor='email'>Email </label>
                <input id='email' type='email' name='email' placeholder='@aol.com?' required />
                
                <FormButton name='Add New User'/>
            </form>
        </div>
    )
}

export default UserForm;
