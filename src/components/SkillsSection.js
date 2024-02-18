import React from "react";

const SkillsSection = (props) => {
    const { lang } = props;
    const designSkill = lang.categories[0];
    const frontEndSkills = lang.categories[1];
    const backEndSkills = lang.categories[2];
    const otherSkills = lang.categories[3];


    return (
        <div className="col-md-12 d-flex flex-wrap justify-content-center px-5">
            {/* Front skills */}
            <h3 className="col-md-12 text-center mb-5 dark-text">Compétences</h3>
            <div className="col-md-9 d-flex justify-content-between">
                <div className="col-md-3 d-flex flex-column">
                    <h4 className="col-md-6 mb-3 dark-text">{designSkill.title}</h4>
                    {designSkill.skills.map((skill, index) => (
                        <p className="col-md-6 dark-text" key={index}>{skill.name}</p>
                    ))}
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <h4 className="col-md-6 mb-3 dark-text font-bold">{frontEndSkills.title}</h4>
                    {frontEndSkills.skills.map((skill, index) => (
                        <p className="col-md-6 dark-text" key={index}>{skill.name}</p>
                    ))}
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <h4 className="col-md-6 mb-3 dark-text">{backEndSkills.title}</h4>
                    {backEndSkills.skills.map((skill, index) => (
                        <p className="col-md-6 dark-text" key={index}>{skill.name}</p>
                    ))}
                </div>
                {/* Back skills */}
                <div className="col-md-2 d-flex flex-column">
                    <h4 className="col-md-6 mb-3 dark-text">{otherSkills.title}</h4>
                    {otherSkills.skills.map((skill, index) => (
                        <p className="col-md-6 dark-text" key={index}>{skill.name}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;