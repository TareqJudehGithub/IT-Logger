import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";
import SearchBar from "./components/layout/SearchBar"; 
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";


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
        <AddBtn />
        <AddLogModal />
        <EditLogModal /> 
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </React.Fragment>
  );
}

export default App;
