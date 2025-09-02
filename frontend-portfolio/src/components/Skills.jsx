import React, {useState, useRef, useEffect} from "react";
import "../App.css";

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: "Portrait Photography", percentage: 95 },
    { name: "Wedding Photography", percentage: 90 },
    { name: "Photo Editing", percentage: 92 },
    { name: "Commercial Photography", percentage: 85 },
  ];
  return (
    <div>
      <div className="skills-container" ref={skillsRef}>
        <h3>Technical Skills</h3>

        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: animated ? `${skill.percentage}%` : "0%",
                  transition: `width 1.5s ease ${index * 0.2}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
