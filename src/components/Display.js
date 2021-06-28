import React from 'react';
import Data from "./Data";

export default function Display({data}) {
    return (
        <section className="display-container">
            <Data name="IP Address" data={data?.ip} />
            <Data 
            name="LOCATION" 
            data={`${data?.location?.city}, ${data?.location?.country} ${data?.location?.postalCode}`} />
            <Data name="TIMEZONE" data={data?.location?.timezone} />
            <Data name="ISP" data={data?.isp} />
        </section>
    )
}
