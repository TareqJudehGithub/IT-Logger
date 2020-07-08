import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";
import SearchBar from "./components/layout/SearchBar"; 
import Logs from "./components/logs/Logs";

import './App.css';

const App = () => {

  useEffect(() => {

    // Init Materialize JS:
    M.AutoInit();

  });

  return (
    <React.Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </React.Fragment>
  );
}

export default App;
