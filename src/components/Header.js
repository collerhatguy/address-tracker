import React from 'react';

export default function Header({setIPAddress}) {
    return (
        <header>
            <h1>IP Address Tracker</h1>
            <span>
                <input 
                type="text" 
                placeholder="Search for any IP adress or domain"
                onChange={e => setIPAddress(e.target.value)}
                >
                </input>
                <button></button>
            </span>
        </header>
    )
}
