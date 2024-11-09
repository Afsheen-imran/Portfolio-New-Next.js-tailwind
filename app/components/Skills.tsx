// components/Skills.tsx
import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "95%" },
    { name: "JavaScript/TypeScript", level: "90%" },
    { name: "Graphic Designing", level: "80%" },
    { name: "Content Writing", level: "85%" },
    { name: "Shopify Store Setup", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Next.js", level: "70%" },
  ];

  return (
    <div
      id="skills"
      className="bg-cover bg-center min-h-screen py-16 md:py-24"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            My Skills
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 bg-blue-900 rounded-lg shadow-lg bg-opacity-50">
              <h2 className="text-lg font-medium text-white">{skill.name}</h2>
              <div className="relative mt-2 h-2 bg-gray-300 rounded-xl">
                <div
                  className="absolute bg-white h-2 rounded-xl"
                  style={{ width: skill.level }}
                />
              </div>
              <p className="font-bold text-white text-right mt-1">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
