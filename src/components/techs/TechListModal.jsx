import React, { useEffect, useState } from 'react';
import TechListItems from "./TechListItems";

const TechListModal = () => {
     const [techs, setTechs] = useState([]);
     const [loading, setLoading] = useState(false);
     
     useEffect(() => {
          getTechs();
     }, []);


     const getTechs = async () => {

          setLoading(true);
          const res = await fetch("/techs");
          const data = await res.json();

          setTechs(data);
          setLoading(false);
     }

     return (
         <div id="tech-list-modal" className="modal">
              <div className="modal-contant">
                   <h4>Technicians List</h4>
                   <ul className="collection">
                    {
                         !loading && techs.map(tech =>
                             <TechListItems 
                              key={tech.id}
                              tech={tech}
                             />
                              )
                    }
                   </ul>
              </div>
         </div>
     )
}

export default TechListModal;
