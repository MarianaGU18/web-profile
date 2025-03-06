import React from "react";
import "./Aboutme.css"; // Archivo CSS para estilos

const Aboutme = () => {
  return (
    <div className="about-container">
      <h1>Sobre Mí</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnB5Kz9hYjZVP00Km6nsM66Ho0UaKG2Y0hQ&s"
        alt="Foto de perfil"
        className="profile-pic"
      />
      <p>
        ¡Hola! Soy una chica apasionada por la tecnología, los videojuegos y el aprendizaje de idiomas. Me encanta pasar tiempo con mis amigos, explorar nuevas experiencias y sumergirme en mundos virtuales llenos de aventuras.
      </p>

      <h2>🎮 Mis Pasatiempos</h2>
      <ul>
        <li><b>Videojuegos:</b> Amo los juegos de aventura, estrategia y mundo abierto. Mis favoritos incluyen Zelda, The Witcher y Animal Crossing.</li>
        <li><b>Aprender Francés:</b> Actualmente estoy estudiando francés y me encanta la cultura y la música de Francia.</li>
        <li><b>Series y Anime:</b> Disfruto viendo series de ciencia ficción y anime con historias profundas y personajes memorables.</li>
      </ul>

      <h2>🚀 Metas y Sueños</h2>
      <ul>
        <li>Convertirme en una desarrolladora de software y crear mis propios videojuegos.</li>
        <li>Viajar a Francia y hablar el idioma con fluidez.</li>
        <li>Explorar más el mundo de la inteligencia artificial y la realidad virtual.</li>
        <li>Desarrollar una comunidad en línea donde pueda compartir mis conocimientos y experiencias.</li>
      </ul>

      <h2>📸 Galería</h2>
      <div className="gallery">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwQOmJi7sXsqFnUk9_rmEGCzh9gJ-OMf0Yw&s" alt="Amigos" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kBY_woOwjj5lpT4FTQoBb0oW3NH8IyfSbQ&s" alt="Videojuegos" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXtrNBEqYcEFPL8j8Vx22rBdKDDs4asFc9Q&s" alt="Francia" />
      </div>
    </div>
  );
};

export default Aboutme;
