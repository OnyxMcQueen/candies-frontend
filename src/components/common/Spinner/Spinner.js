import React from "react";

import './Spinner.css';

function LoadingSpinner() {
    return(
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
            <p style={{fontWeight: "bolder", color: "black", fontSize: "24px"}}>Please Wait...</p>
        </div>
    )
}

export default LoadingSpinner;