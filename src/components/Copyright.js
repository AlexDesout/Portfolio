import React from "react";

const Copyright = (props) => {
    const { copyright } = props.lang;
    return (
        <div className="col-md-12 p-5 d-flex flex-column justify-content-center mt-5">
            <p className="text-center dark-text">{copyright.message}</p>
            <br />
            <p className="text-center dark-text">Copyright © {new Date().getFullYear()} Alexandre Desoutter</p>
        </div>
    );
}

export default Copyright;