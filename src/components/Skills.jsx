// import "./Skills.css";

// // Programming & CS
// import cpp from "../assets/skills/cpp.png";
// import python from "../assets/skills/python.png";
// import oops from "../assets/skills/oops.png";
// import dsa from "../assets/skills/dsa.png";
// import os from "../assets/skills/os.png";
// import sql from "../assets/skills/sql.png";

// // Web & Databases
// import html from "../assets/skills/html.png";
// import css from "../assets/skills/css.png";
// import javascript from "../assets/skills/javascript.png";
// import react from "../assets/skills/react.png";
// import mongodb from "../assets/skills/mongodb.png";

// // AI / ML
// import ml from "../assets/skills/ml.png";
// import dl from "../assets/skills/dl.png";

// const skills = [
//   { name: "C++", image: cpp },
//   { name: "Python", image: python },
//   { name: "Object-Oriented Programming", image: oops },
//   { name: "Data Structures & Algorithms", image: dsa },
//   { name: "Operating Systems", image: os },
//   { name: "SQL", image: sql },

//   { name: "HTML", image: html },
//   { name: "CSS", image: css },
//   { name: "JavaScript", image: javascript },
//   { name: "React", image: react },
//   { name: "MongoDB", image: mongodb },

//   { name: "Machine Learning", image: ml },
//   { name: "Deep Learning", image: dl },
// ];

// const Skills = () => {
//   return (
//     <section className="skills" id="skills">
//       <div className="skills-container">
//         <h2>Skills</h2>

//         <div className="skills-grid">
//           {skills.map((skill) => (
//             <div className="skill-card" key={skill.name}>
//               <img src={skill.image} alt={skill.name} />
//               <p>{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;






import "./Skills.css";
import skills from "../data/skills";
import React from "react";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
