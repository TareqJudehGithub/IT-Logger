import React, { useState } from 'react';
import M from "materialize-css";
const AddLogModal = () => {

     const [message, setMessage] = useState("");
     const [attention, setAttention]= useState(false);
     const [tech, setTech] = useState("");

     const onSubmit = () => {
          
          if(message === ""){
               M.toast({ html: "Please enter a message." })
          }
          else if(tech === ""){
               M.toast({ html: "Please select a Technician." })
          }
          else{
               console.log(message, tech, attention);
               
               // clear fields
               setMessage("");
               setAttention(false);
               setTech("");
          }
     }
     return (
          <div id="add-log-modal"  /* id must match href defined in AddBtn.jsx */
               className="modal"
               style={modalStyle}
          >  
               <div className="modal-content">
                    <h4>Enter System Log</h4>

                    <div className="row">
                        <div className="input-field">
                        <input 
                              type="text" name="message" value={message} 
                              onChange={event => setMessage(event.target.value)}
                         />
                         <label htmlFor="message" className="active">
                              Log Message 
                         </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field">
                              <select 
                                   className="browser-default"
                                   name="tech" value={tech}
                                   onChange={event => setTech(event.target.value)}
                              >
                                   <option value="" disabled>Select Technician</option>
                                   <option value="John Smith">John Smith</option>
                                   <option value="Juan Mark">Juan Mark</option>
                                   <option value="Sandepp Khan">Sandepp Khan</option>
                              </select>
                        </div>
                    </div>

                    <div className="row">
                         <div className="input-field">
                              <p>
                                   <label>
                                        <input 
                                             className="filled-in"
                                             type="checkbox"
                                             checked={attention} value={attention}
                                             onChange={() => setAttention(!attention)}
                                        />
                                        <span>Needs Attention</span>
                                   </label>
                              </p>
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
};

const modalStyle= {
     width: "75%",
     height: "75%"
};

export default AddLogModal;
