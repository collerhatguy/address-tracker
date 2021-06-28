import React from 'react';
import Data from "./Data";

export default function Display({IPAddress}) {
    return (
        <section className="display-container">
            <Data name="IP Address" data={IPAddress} />
            <Data name="LOCATION" data={null} />
            <Data name="TIMEZONE" data={null} />
            <Data name="ISP" data={null} />
        </section>
    )
}
