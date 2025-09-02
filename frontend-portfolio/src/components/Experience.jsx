import React from 'react'
import "../App.css"
import { FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <div className="experience mt-4">
        <div className="container">
          <div className="experience-title">
            <h2 className="text-center fw-bold">Experience & Skills</h2>
            <span className="divider"></span>
            <p className="text-center">
              Our expertise in the field of photography
            </p>
          </div>

          <div className="experience-content">
            <div className="experience-card">
              <FaAward
                className="mb-3"
                style={{ color: "var(--secondary-color)", fontSize: "2rem" }}
              />
              <h3>Awards & Recognition</h3>
              <p>
                International Photography Awards 2022 - 1st Place in Portrait
                Category
              </p>
              <p>National Geographic Photo Contest 2021 - Finalist</p>
            </div>

            <div className="experience-card">
              <FaBriefcase
                className="mb-3"
                style={{ color: "var(--secondary-color)", fontSize: "2rem" }}
              />
              <h3>Professional Experience</h3>
              <p>8+ years of professional photography experience</p>
              <p>
                Worked with top brands like National Geographic, Sony, and Canon
              </p>
            </div>

            <div className="experience-card">
              <FaGraduationCap
                className="mb-3"
                style={{ color: "var(--secondary-color)", fontSize: "2rem" }}
              />
              <h3>Education & Training</h3>
              <p>Bachelor of Fine Arts in Photography</p>
              <p>Certified Professional Photographer (PPA)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
