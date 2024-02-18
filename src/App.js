import './App.css';
import Presentation from './components/Presentation';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Copyright from './components/Copyright';
import fr from './languages/fr.json';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const currentLang = fr;
  return (
    <div className="App">
      ReactDOM.render(
      <Router>
        <Presentation lang={currentLang.fr} />
        <SkillsSection lang={currentLang.fr} />
        <ProjectsSection lang={currentLang.fr} />
        <ContactSection lang={currentLang.fr} />
        <Copyright lang={currentLang.fr} />
      </Router>,
      document.getElementById('root')
    </div >
  );
}

export default App;
