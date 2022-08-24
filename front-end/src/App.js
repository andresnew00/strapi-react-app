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
      // TODO: Handle error if data is not received with an error message on front end
  }

  const listItems = pokeBuilds.map((element) =>
  <li>{element.attributes.title}</li>
);

  return (
    <>
    <div className="App">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <header className="App-header">
        {listItems}
      </header>
    </div>
    </>
  );
}

export default App;
