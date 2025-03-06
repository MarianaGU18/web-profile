import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/paginas/Home';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Home />
        </main>
      </Router >

      
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div >
  );
};

export default App;