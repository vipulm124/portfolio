import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
		
		<ResponsiveAppBar/>
		      <header className="App-header">
				
				<Hello/>
        <Skills/>
				

        
      </header>
    </div>
  );
}

export default App;
