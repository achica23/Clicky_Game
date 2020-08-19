import React from "react";

function Navbar({ count, handleIncrement }) {

    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
        </div>
            <div className="card-body">
                <p className="card-text">Click Count: {count}</p>
                <button className="btn btn-primary" onClick={handleIncrement}>
                    Increment
          </button>
            </div>
        </div>
    );
}




export default Navbar;