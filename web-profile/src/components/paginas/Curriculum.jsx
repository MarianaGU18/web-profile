import React from "react";
import "./Curriculum.css"; 

const Curriculum = () => {
  return (
    <div className="curriculum-container">
      <h1>📜 Mi Currículum</h1>
      <p>
        Soy una persona apasionada por la tecnología, el aprendizaje y el desarrollo de nuevas habilidades. Me encanta enfrentar desafíos y mejorar constantemente.
      </p>

      <h2>🎓 Educación</h2>
      <div className="education">
        <h3>Universidad Nacional Autónoma de México</h3>
        <p>Ingeniería en Software - 2021 - Presente</p>
        <p>Enfoque en desarrollo web, inteligencia artificial y seguridad informática.</p>
      </div>

      <h2>💼 Experiencia</h2>
      <div className="experience">
        <h3>Desarrolladora Web - Startup ABC</h3>
        <p>(2023 - Actualidad)</p>
        <ul>
          <li>Desarrollo de interfaces modernas con React y Tailwind CSS.</li>
          <li>Optimización del rendimiento en aplicaciones web.</li>
          <li>Colaboración en proyectos ágiles con metodologías Scrum.</li>
        </ul>

        <h3>Intern en Empresa XYZ</h3>
        <p>(2022 - 2023)</p>
        <ul>
          <li>Apoyo en el desarrollo backend con Node.js y Express.</li>
          <li>Creación de APIs para integrar sistemas internos.</li>
        </ul>
      </div>

      <h2>🛠 Habilidades</h2>
      <ul className="skills">
        <li>React, Angular, Vue.js</li>
        <li>Node.js, Express, Spring Boot</li>
        <li>Base de datos: MySQL, MongoDB, Firebase</li>
        <li>Idiomas: Español (Nativo), Inglés (Avanzado), Francés (Intermedio)</li>
      </ul>

      <h2>🚀 Proyectos</h2>
      <div className="projects">
        <div className="project-card">
          <h3>Sistema de Gestión de Tareas</h3>
          <p>Aplicación full-stack que permite administrar tareas con autenticación de usuarios.</p>
        </div>

        <div className="project-card">
          <h3>Blog Personal</h3>
          <p>Plataforma desarrollada en React con un backend en Node.js y MongoDB.</p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
