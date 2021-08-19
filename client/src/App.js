import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ResumeHero from './components/ResumeHome';
import ResumeModal from './components/ResumeModal';
import ResumeSkills from './components/ResumeSkills';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/skills">
            <ResumeSkills />
          </Route>
          <Route path="/">
            <ResumeHero />
            <ResumeModal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
