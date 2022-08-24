import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import './Toast.css'

export default function Toast({ id, message, status, summary, sticky, removeToast }) {

    function handleXClicked() {
        removeToast(id);
    }

    if (!sticky) {
        // remove after 3 seconds
        setTimeout(() => { removeToast(id) }, 3000);
    }

    var icon = faCommentAlt;

    if (status === 'success') {
        icon = faCheck;
    } else if (status === 'warn') {
        icon = faExclamationTriangle;
    } else if (status === 'error') {
        icon = faTimes;
    } else if (status === 'info') {
        icon = faInfoCircle;
    } else {
        icon = faInfoCircle;
        status = 'info';
    }

    return (
        <div className={`toast-root ${status} ${sticky && 'sticky'}`}>
            <FontAwesomeIcon className="icon"
                size="2x"
                icon={icon} />
            <div className="summary">{summary || status}</div>
            <div>{message || '...'}</div>
            <FontAwesomeIcon className="x-button"
                onClick={handleXClicked} icon={faTimes} />
        </div>
    );

}
