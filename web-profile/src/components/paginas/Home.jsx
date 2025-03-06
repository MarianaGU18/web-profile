import React from "react";
import Card from "../Card/Card";

const styles = {
  container: {
    width: "100%", 
    display: "flex", 
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "80%", 
    height: "auto",
  }
};

const Home = () => {
  return (
    <div style={styles.container}>
      <Card 
        imageSrc="https://media.licdn.com/dms/image/v2/D5612AQFhxrboR1pVtQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1689693901792?e=2147483647&v=beta&t=LRLUvkrYr0iWTiDs6SDgUfKj_7BpLAzjSDHVDepNKNQ"
        title="Wifi7" 
        description="WiFi 7 is the upcoming WiFi standard..."
        style={styles.img} // Pasa el estilo si `Card` lo soporta
      />
    </div>
  );
}

export default Home;
