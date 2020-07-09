import React from 'react';
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItem = ({ log }) => {
     const { id, tech, attention, date } = log;
     return (
          <li className="collection-item">
               <div>
                    <a 
                         href="#edit-log-modal"
                         className={`modal-trigger 
                              ${attention ? "red-text" : "blue-text"}`
                         }
                    >
                         {log.message}
                    </a> 
                    <br></br>   
                    <span className="grey-text">
                         <span className="black-text">ID #{id}{" "}</span>
                         Last updated by: 
                         <span className="black-text">{" "}{tech}</span>
                         {" "}On:{" "}
                         <Moment format="MMMM Do YYYY, h:mm a" >
                              {date}
                         </Moment>
                    </span> 
                    <a href="#!" className="secondary-content">
                         <i className="material-icons grey-text" >delete</i> 
                    </a>
               </div>
          </li>
     )
};

LogItem.propTypes= {
     log: PropTypes.object.isRequired,
}
export default LogItem;
