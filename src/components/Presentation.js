import React from "react";
import SocialMedia from "./SocialMedia";

const Presentation = (props) => {
    const { lang } = props;
    return (
        <div className="d-flex align-items-center justify-content-center p-5 presentation">
            <div className="col-md-5 d-flex">
                <div className="d-flex flex-column">
                    <h1 className="dark-text title">{lang.name}</h1>
                    <h2 className="dark-text title">{lang.title}</h2>
                    <h3 className="dark-text title">{lang.subtitle}</h3>
                    <SocialMedia media={lang.social}/>
                </div>
            </div>
            <div className="col-md-4 d-flex">

                <h1 className="dark-text title">{lang.name}</h1>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Presentation;