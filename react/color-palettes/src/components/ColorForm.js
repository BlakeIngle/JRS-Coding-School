import React, { useState } from 'react'
import './ColorForm.css'

export default function ColorForm({ onGenerate }) {

    const [hexColor, setHexColor] = useState('#ff00ff');

    function handleFormSubmit(e) {
        e.preventDefault();
        if (onGenerate) {
            onGenerate(hexColor);
        }
    }

    function onInputChanged(e) {
        setHexColor(e.target.value);
    }

    return (
        <form onSubmit={handleFormSubmit}
            className="color-form-root"
        >
            <input
                style={{ backgroundColor: hexColor }}
                type="color"
                name="hexColor"
                value={hexColor}
                onChange={onInputChanged}
            />

            <button type="submit">
                Generate Palette
            </button>
        </form>
    )
}
