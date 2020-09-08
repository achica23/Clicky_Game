import React from "react";

function Character({ id, image, key, handleIncrement }) {
    return (<div className="card col-4 col-md-3" onClick={handleIncrement} >
        <img src={image} className="card-img-top" alt={key} />
    </div >
    )
}

export default Character