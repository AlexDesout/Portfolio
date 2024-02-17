import './App.css';
import Presentation from './components/Presentation';
import SkillsSection from './components/SkillsSection';
import fr from './languages/fr.json';

function App() {
  const currentLang = fr;
  return (
    <div className="App">
        <Presentation lang={currentLang.fr}/>
        <SkillsSection lang={currentLang.fr}/>
    </div>
  );
}

export default App;
