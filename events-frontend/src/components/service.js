import React from 'react';
import './style.css';

 const Registration = () => {
   return (
     <div className="Regcontainer">
       <div className="header">Servicen descrision</div>
       <div className="content">
         <div className="image"></div>
         <div className="form">
           <div className="form-group">
             <label htmlFor="servicename">Service Name</label>
             <input type="text" name="" placeholder="Service Name" />
           </div>
           <div className="form-group">
            <p></p>
             <label htmlFor="Companyemail">Email</label>
             <input type="companyemail" name="companyemail" placeholder="email" />
           </div>
           <div className="form-group">
             <label htmlFor="password">Password</label>
             <input type="password" name="password" placeholder="password" />
           </div>
           <div className="form-group">
             <label htmlFor="loctaion">Location</label>
             <input type="text" name="location" placeholder="Comapny Location" />
           </div>
           <div className="form-group">
             <label htmlFor="address">Address</label>
             <input type="text" name="Address" placeholder="Comapny Address" />
           </div>
           <div className="form-group">
             <label htmlFor="PhoneNumber">Phone Number</label>
             <input type="text" name="PhoneNumber" placeholder="Phone number" />
           </div>
         </div>
       </div>
       <div className="footer">
         <button type="button" className="btn">
            Continue
         </button>
       </div>
     </div>
   );
 }

 export default Registration;
