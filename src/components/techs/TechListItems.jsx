import React from 'react'
import PropTypes from "prop-types";

const TechListItems = ({ tech }) => {

     const { firstName, lastName } = tech;
     return (
          <li className="collection-item">
               <div>
                    <strong>{firstName} {lastName}</strong>
                    <a href="#!" className="secondary-content">
                         <i className="material-icons grey-text">delete</i>
                    </a>
               </div>
          </li>
     )
};
TechListItems.propTypes = {
     tech: PropTypes.object.isRequired
}

export default TechListItems
