
import React, { useState } from 'react';
import M from "materialize-css";

const EditechModal = () => {

     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName]= useState("");
     

     const onSubmit = () => {
          
          if(firstName === ""){
               M.toast({ html: "First Name must not be empty." })
          }
          else if(lastName === ""){
               M.toast({ html: "Last Name must be empty." })
          }
          else{
               console.log(firstName, lastName);
               
               // clear fields
               firstName("");
               lastName(false);
          }
     }
     return (
          <div id="edit-tech-modal"  /* id must match href defined in AddBtn.jsx */
               className="modal"
     
          >  
               <div className="modal-content">
                    <h4>New Technician</h4>

                    <div className="row">
                        <div className="input-field">
                        <input 
                              type="text" name="firstName" value={firstName} 
                              onChange={event => setFirstName(event.target.value)}
                         />
                         <label htmlFor="firstName" className="active">
                             First Name
                         </label>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="input-field">
                        <input 
                              type="text" name="lastName" value={lastName} 
                              onChange={event => setLastName(event.target.value)}
                         />
                         <label htmlFor="lastName" className="active">
                             Last Name
                         </label>
                        </div>
                    </div>
               </div>
               <div className="modal-footer">
                    <a
                    href="#!" onClick={onSubmit}  
                    className="modal-close waves-effect waves-white btn-small left blue"
                    type="submit"
                    >
                         Submit<i className="material-icons right">send</i>
                    </a>
               </div>
          </div>
     )
}

export default EditechModal;