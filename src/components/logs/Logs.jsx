import React, { useEffect, useState } from 'react';

const Logs = () => {
     const [logs, setLogs] = useState([]);
     const [loading, setLoading] = useState(false);
     
     useEffect(() => {
          getLogs();
     }, []);


     const getLogs = async () => {

          setLoading(true);
          const res = await fetch("/logs");
          const data = await res.json();

          setLogs(data);
          setLoading(false);
     }

     if(loading){
          return <h4>Loading...</h4>
     }
     return (
          <ul className="collection-with-header">
               <li className="collection-header">
                    <h4 className="center">System Logs</h4>
               </li>
               {    // done loading and no logs:
                    !loading && logs.length === 0
                    ?
                    (
                         <p className="center">Logs List is empty </p>
                    )
                    :
                    (
                    logs.map(log => <li key={log.id}>{log.message}</li>)
                    )
               }
          </ul>
     )
}

export default Logs;