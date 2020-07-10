import React from 'react'


const AddBtn = props => {
     return (
          <div className="fixed-action-btn">
               <a 
                    className="btn-floating btn-medium blue darken-2 modal-trigger"
                    href="#add-log-modal"  
               >
                    <i className="material-icons">add</i>
               </a>
               <ul>
                    <li>
                         <a  className="btn-floating green modal-trigger"
                              href="#tech-list-modal"
                         >
                              <i className="material-icons">person</i>
                         </a>
                    </li>
                    <li 
                         className="btn-floating red modal-trigger"
                         href="#tech-modal" 
                    >
                        <i className="material-icons">person_add</i>
                    </li>
                    
               </ul>
          </div>
     )
}

export default AddBtn;
