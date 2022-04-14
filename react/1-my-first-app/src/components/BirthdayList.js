import React from 'react'

export default function BirthdayList({ people }) {

    console.log(people.map(

        person => <p>{person.birthday}</p>

    ));

    return (
        <div>
        </div>
    );
}
