import React from "react";

const SkillsSection = (props) => {
    const { lang } = props;
    const { frontEndSkills } = lang.skills[0];
    const { backEndSkills } = lang.skills[1];
    // console.log(frontEndSkills)

    frontEndSkills.forEach(skill => {
        console.log(skill)
    });
    return (
        <div className="col-md-12 d-flex flex-wrap justify-content-center px-5">
            {/* Front skills */}
            <h3 className="col-md-12 dark-text">Mes compétences</h3>
            <div className="col-md-2 d-flex flex-column justify-content-start">
                {frontEndSkills.map((skill, index) => (
                    <p className="dark-text" key={index}>{skill}</p>
                ))}
            </div>
            {/* Back skills */}
            <div className="col-md-2 d-flex flex-column justify-content-end">
                {backEndSkills.map((skill, index) => (
                    <p className="dark-text" key={index}>{skill}</p>
                ))}
            </div>
        </div>
    );
}

export default SkillsSection;