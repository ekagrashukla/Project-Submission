import React from 'react'

function Card(props) {
    return (
        <div>
            <div class="card">
            <div class="card-img">
            <img src={props.url} alt="Avatar"/>
            </div>
            <div class="container">
                <h4><b>{props.name}</b></h4>
            </div>
            </div>
        </div>
    )
}

export default Card
