import React from "react";
import "./Progress.scss";
import { techStack, illustrations } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <img
              alt="Skills"
              src={illustrations.skill_progress}
            />
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
