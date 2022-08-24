import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pokeBuilds, setPokeBuilds] = useState([]);

  useEffect(() => {
    // update updates the list of builds
    // when the component is rendered for the first time
    update();
  }, []);

  function update() {
    fetch(`${process.env.REACT_APP_BACKEND}api/builds`)
      .then(res => res.json())
      .then(builds => {
        setPokeBuilds(builds.data);
        console.log(pokeBuilds)
      })
  }

  const listItems = pokeBuilds.map((element) =>
  <li>{element.attributes.title}</li>
);

  return (
    <div className="App">
      <header className="App-header">
        {listItems}
      </header>
    </div>
  );
}

export default App;
