import React from 'react'

export default function Card (props) {
    return(
        <section className="card-items">
            <img src={props.item.imageUrl} />
                <div className='card'>
                <span>{props.item.location}</span>
                <a href={props.item.googleMapsLink}>view on google maps</a>
                <h2>{props.item.title}</h2>
                <span className="date-style">{props.item.startDate} - {props.item.endDate}</span>
                <p>{props.item.description}</p>
                </div>
        </section>
    )
}