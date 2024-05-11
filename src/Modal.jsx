// Modal.jsx
import React from 'react';

export default function Modal({ id, title, description }) {
    function closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    }

    return (
        <div id={id} className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{description}</p>
                <button onClick={() => closeModal(id)} className="mt-4 bg-red-500 text-white p-2 rounded-lg">Close</button>
            </div>
        </div>
    )
}
