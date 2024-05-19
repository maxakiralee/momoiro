import React, { useState } from 'react';
import './Submit.css'

export default function Submit() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Close the popup after 3 seconds
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="submit-btn">
                Submit
            </button>

            {showPopup && (
                <div className="modal">
                    <div className="modal-content">
                        <p style={{ fontFamily: 'monospace' }}>Thanks for submitting the form. We'll let you know once the Admin approves it.</p>
                        <button onClick={() => setShowPopup(false)} style={{ fontFamily: 'monospace' }}>Close</button>
                    </div>
                </div>
            )}
        </form>
    );
}
