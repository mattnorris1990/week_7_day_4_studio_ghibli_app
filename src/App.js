import './App.css';
import FilmContainer from './containers/FilmContainer';

function App() {
  return (
    <div className="App">
    <heading className="heading-bar">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/440px-Studio_Ghibli_logo.svg.png" />
    </heading>
    
    <FilmContainer />
    
    </div>
  );
}

export default App;
