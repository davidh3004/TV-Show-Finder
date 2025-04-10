import './App.css'
import { Search } from './components/search.jsx'
import { Shows } from './components/shows.jsx';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState([]);

  return (
    <>
      <div className="App">
        <h1 className="finder">TV Shows Finder</h1>
        <Search setSearch={setSearch}/>
        <Shows search={search}/>
      </div>
    </>
  )
}

export default App
