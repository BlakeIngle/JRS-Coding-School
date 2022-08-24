import React from 'react'
import { useToasts } from '../toasts/ToastService'
import './MyComponent.css'

export default function MyComponent() {

    const toast = useToasts();

    return (
        <div className="toast-demo-root">
            <button className="success" onClick={() => {
                toast.success("It works!");
            }}>
                Success
            </button>
            <button className="error" onClick={() => {
                toast.error("It doesn't work! :(")
            }}>
                Error
            </button>
            <button className="warn" onClick={() => {
                toast.warn("It might not have worked.")
            }}>
                Warning
            </button>
            <button className="info" onClick={() => {
                toast.info("For your information.")
            }}>
                Info
            </button>

            <button onClick={() => {
                toast.add({
                    summary: "LMAO",
                    status: "error",
                    sticky: true,
                    message: "This message was brought to you by custom."
                });
            }}>
                Custom
            </button>
        </div>
    )
}
