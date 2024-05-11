// WidgetCard.jsx
import React from 'react';

export default function WidgetCard({ title, description, imgSrc, value, buttonTitle, modalId, children }) {
    function openModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    }
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{description}</p>
            {imgSrc ? <img src={imgSrc} alt={title} /> : <p className="text-3xl font-semibold">{value}</p>}
            {buttonTitle && <button onClick={() => openModal(modalId)} className="mt-4 bg-orange text-white p-2 rounded-lg shadow-lg"> {buttonTitle}</button>}
            {children}
        </div>
    )
}