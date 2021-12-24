import React, { useState } from 'react';
import './users.css'

export default function Users() {

    var [users, setUsers] = useState([]);

    var [firstName, setFirstName] = useState('');
    var [email, setEmail] = useState('');
    var [scholarship, setScholarship] = useState(false);
    var [favAnimal, setFavAnimal] = useState('');
    var [experience, setExperience] = useState(-1);

    var animals = [
        { label: "Cats", value: "cat" },
        { label: "Dogs", value: "dog" }
    ]

    function addUser(e) {
        e.preventDefault();

        setUsers([...users, {
            key: new Date().getTime().toString(),
            firstName,
            email,
            scholarship,
            favAnimal,
            experience
        }]);

        setFirstName('')
        setEmail('')
        setScholarship(false)
    }

    function onFavAnimalChanged(e) {
        setFavAnimal(e.target.value)
    }

    return (
        <div>
            <form onSubmit={addUser}>
                <label className="required" htmlFor="firstName" >Name : </label>
                <input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value)
                    }}
                    placeholder="first name"
                    required />
                <br />
                <label className="required" htmlFor="email">Email : </label>
                <input type="text"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    id="email"
                    placeholder="email"
                    required />
                <br />

                <label htmlFor="scholarship">Apply For Scholarship : </label>
                <input type="checkbox"
                    name="scholarship"
                    checked={scholarship}
                    onChange={e => setScholarship(e.target.checked)}
                    id="scholarship" />
                <br />


                {animals.map(animal =>
                    <div key={animal.value}>
                        <label htmlFor={'radio' + animal.label}>{animal.label}</label>
                        <input type="radio"
                            name="favAnimal"
                            value={animal.value}
                            checked={favAnimal === animal.value}
                            onChange={onFavAnimalChanged}
                            id={'radio' + animal.label} />
                    </div>
                )}

                <p>How much programming experience do you have?</p>
                <select name="experience"
                    onChange={e => setExperience(e.target.value)}
                    id="experience"
                    value={experience}
                    required >
                    <option value={-1} disabled>--- Select One ---</option>
                    {["None", "Some", "A Whole Lot"].map((exp, i) =>
                        <option value={i} key={exp}>{exp}</option>
                    )}
                </select>
                <br />
                <br />

                <button type="submit">Add Person</button>
            </form>
            <h2>Users: </h2>
            {users.map(user =>
                <div key={user.key} >
                    <h3>{user.firstName}</h3>
                    <span>{user.email}</span>
                </div>
            )}
        </div >
    )
}