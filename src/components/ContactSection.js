import React from "react";
import SocialMedia from "./SocialMedia";

const ContactSection = (props) => {
    const { lang } = props;
    const { contact } = props.lang;

    return (
        <div className="col-md-12 px-5 d-flex flex-column justify-content-center mt-5">
            <h4 className="col-md-12 text-center mb-5 dark-text">{contact.title}</h4>
            <p className="text-center dark-text">{contact.description}</p>
            <div className="col-md-8 mx-auto mt-2 d-flex justify-content-center">
                <SocialMedia media={lang.social}/>
            </div>
        </div>
    );
}

export default ContactSection;