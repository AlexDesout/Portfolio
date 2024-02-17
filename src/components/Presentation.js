import React from "react";
import SocialMedia from "./SocialMedia";

const Presentation = (props) => {
    const { lang } = props;
    // console.log(lang)
    return (
        <div className="p-5 ">
            <div className="col-md-12 d-flex flex-direction-row presentation">
                <div className="col-md-6">
                    <h1 className="dark-text title">{lang.name}</h1>
                    <h2 className="dark-text title">{lang.title}</h2>
                    <h3 className="dark-text title">{lang.subtitle}</h3>
                </div>
                <div className="col-md-6">
                    <p className="dark-text">{lang.about}</p>
                </div>
            </div>
            <div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default Presentation;