import React from "react";

function Character({ id, image, key }) {
    return (<div className="card">
        <img src={image} className="card-img-top" alt={key} />
    </div>
    )
}

export default Character