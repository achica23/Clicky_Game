import React from "react";

function Navbar({ count, handleIncrement }) {

    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                GOT Clicky Game
        </div>
            <div className="card-body">
                <p className="card-text">Score: {count}</p>

            </div>
        </div>
    );
}




export default Navbar;