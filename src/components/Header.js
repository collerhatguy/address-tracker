import React from 'react';
import background from "../images/pattern-bg.png"

export default function Header({setIPAddress}) {
    return (
        <header>
            <h1>IP Address Tracker</h1>
            <input 
            type="text" 
            placeholder="Search for any IP adress or domain"
            onChange={e => setIPAddress(e.target.value)}
            />
        </header>
    )
}
