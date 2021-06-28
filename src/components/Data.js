import React from 'react'

export default function Data({name, data}) {
    return (
        <div className="data">
            <h4>{name}</h4>
            <span>{data}</span>
        </div>
    )
}
