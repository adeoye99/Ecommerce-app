import React from 'react';
import "./Footer.css"

function Footer() {
    const currentyear = new Date().getFullYear();

    return (
        <footer>
            <p>
            Copyright © {currentyear}
            </p>
        </footer>
    )
}

export default Footer
