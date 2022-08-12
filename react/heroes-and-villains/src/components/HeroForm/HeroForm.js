import React, { useEffect, useRef, useState } from 'react'
import { useApi } from '../../services/api.service'
import ChipMaker from '../ChipMaker/ChipMaker'
import './HeroForm.css'

export default function HeroForm({ existingHero, onSubmit, onCancel }) {

    let initialState = {
        name: existingHero?.name || '',
        realName: existingHero?.realName || '',
        nemesis: existingHero?.nemesis || '',
        powers: existingHero?.powers || [
            'foo', 'bar', 'scratch'
        ]
    }

    const http = useApi();
    const nameInputRef = useRef();
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (onSubmit) {
            onSubmit(formData);
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    return (
        <form className="hero-form"
            onSubmit={handleFormSubmit}>

            <div>
                <label htmlFor="nameInput">
                    Name:
                </label>
                <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}

                    ref={nameInputRef}
                    placeholder="Hero Man"
                    required
                    id="nameInput"
                />
            </div>

            <div>
                <label htmlFor="realNameInput">
                    Real Name:
                </label>
                <input type="text"
                    name="realName"
                    value={formData.realName}
                    onChange={handleInputChange}

                    placeholder="John Doe"

                    id="realNameInput"
                />
            </div>

            <div>
                <label htmlFor="nemesisInput">
                    Nemesis Name:
                </label>
                <input type="text"
                    name="nemesis"
                    value={formData.nemesis}
                    onChange={handleInputChange}

                    placeholder="Dr. Bad Guy"
                    required
                    id="nemesisInput"
                />
            </div>

            <ChipMaker />

            <button type="submit">
                Submit
            </button>
        </form>
    )
}
